import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  ".codex-plugin/plugin.json",
  ".claude-plugin/plugin.json",
  "plugin.json",
  "gemini-extension.json",
  ".mcp.json",
  "mcp/server.mjs"
];

for (const file of requiredFiles) await fs.access(path.join(root, file));

for (const file of requiredFiles.filter((file) => file.endsWith(".json"))) {
  JSON.parse(await fs.readFile(path.join(root, file), "utf8"));
}

const skillEntries = await fs.readdir(path.join(root, "skills"), { withFileTypes: true });
const skillFolders = skillEntries.filter((entry) => entry.isDirectory());
if (skillFolders.length !== 51) throw new Error(`Expected 51 skills, found ${skillFolders.length}`);

for (const skill of skillFolders) await fs.access(path.join(root, "skills", skill.name, "SKILL.md"));

const child = spawn(process.execPath, [path.join(root, "mcp/server.mjs")], { stdio: ["pipe", "pipe", "inherit"] });
let output = "";
child.stdout.setEncoding("utf8");
child.stdout.on("data", (chunk) => { output += chunk; });
child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id: 1, method: "initialize", params: { protocolVersion: "2025-03-26", capabilities: {}, clientInfo: { name: "validator", version: "1" } } })}\n`);
child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: "list_design_skills", arguments: {} } })}\n`);
child.stdin.end();

await new Promise((resolve, reject) => {
  child.on("error", reject);
  child.on("close", (code) => code === 0 ? resolve() : reject(new Error(`MCP server exited with ${code}`)));
});

const messages = output.trim().split("\n").map((line) => JSON.parse(line));
if (messages.length !== 2 || messages.some((message) => message.error)) throw new Error("MCP smoke test failed");
const listPayload = JSON.parse(messages[1].result.content[0].text);
if (listPayload.count !== 51) throw new Error(`MCP listed ${listPayload.count} skills instead of 51`);

console.log("Validated 51 skills, 6 manifests/configs, and the MCP server.");
