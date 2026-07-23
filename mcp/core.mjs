import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_ROOT = path.join(ROOT, "skills");
export const SERVER_INFO = { name: "stoners-design", version: "0.3.0" };

function parseFrontmatter(markdown, fallbackName) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) return { name: fallbackName, description: "" };

  const lines = match[1].split("\n");
  let name = fallbackName;
  let description = "";
  let collectingDescription = false;

  for (const line of lines) {
    const nameMatch = line.match(/^name:\s*["']?(.+?)["']?\s*$/);
    if (nameMatch) {
      name = nameMatch[1];
      collectingDescription = false;
      continue;
    }

    const descriptionMatch = line.match(/^description:\s*(.*)$/);
    if (descriptionMatch) {
      const value = descriptionMatch[1].trim();
      collectingDescription = value === ">" || value === "|" || value === ">-" || value === "|-";
      if (!collectingDescription) description = value.replace(/^["']|["']$/g, "");
      continue;
    }

    if (collectingDescription) {
      if (/^\s+/.test(line)) description += `${description ? " " : ""}${line.trim()}`;
      else collectingDescription = false;
    }
  }

  return { name, description };
}

async function buildCatalog() {
  const entries = await fs.readdir(SKILLS_ROOT, { withFileTypes: true });
  const skills = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const skillPath = path.join(SKILLS_ROOT, entry.name, "SKILL.md");
    try {
      const markdown = await fs.readFile(skillPath, "utf8");
      const metadata = parseFrontmatter(markdown, entry.name);
      skills.push({
        name: metadata.name,
        folder: entry.name,
        description: metadata.description,
        path: skillPath
      });
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
    }
  }

  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

function textResult(value) {
  return { content: [{ type: "text", text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }] };
}

function safeSkillFile(folder, relativeFile) {
  const skillRoot = path.resolve(SKILLS_ROOT, folder);
  const target = path.resolve(skillRoot, relativeFile);
  if (target !== skillRoot && !target.startsWith(`${skillRoot}${path.sep}`)) {
    throw new Error("File path escapes the selected skill directory");
  }
  return target;
}

async function callTool(name, args = {}) {
  const catalog = await buildCatalog();

  if (name === "list_design_skills") {
    return textResult({ count: catalog.length, skills: catalog.map(({ name: skillName, description }) => ({ name: skillName, description })) });
  }

  if (name === "search_design_skills") {
    const query = String(args.query ?? "").trim().toLowerCase();
    if (!query) throw new Error("query is required");
    const terms = query.split(/\s+/).filter(Boolean);
    const matches = catalog.filter((skill) => {
      const haystack = `${skill.name} ${skill.description}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
    return textResult({ query, count: matches.length, skills: matches.map(({ name: skillName, description }) => ({ name: skillName, description })) });
  }

  if (name === "get_design_skill") {
    const requested = String(args.name ?? "").trim().toLowerCase();
    const skill = catalog.find((candidate) => candidate.name.toLowerCase() === requested || candidate.folder.toLowerCase() === requested);
    if (!skill) throw new Error(`Unknown design skill: ${args.name ?? ""}`);
    return textResult(await fs.readFile(skill.path, "utf8"));
  }

  if (name === "get_design_skill_file") {
    const requested = String(args.name ?? "").trim().toLowerCase();
    const skill = catalog.find((candidate) => candidate.name.toLowerCase() === requested || candidate.folder.toLowerCase() === requested);
    if (!skill) throw new Error(`Unknown design skill: ${args.name ?? ""}`);
    const relativeFile = String(args.path ?? "").trim();
    if (!relativeFile) throw new Error("path is required");
    return textResult(await fs.readFile(safeSkillFile(skill.folder, relativeFile), "utf8"));
  }

  throw new Error(`Unknown tool: ${name}`);
}

export const tools = [
  {
    name: "list_design_skills",
    description: "List all Stoner's Design skills with their descriptions.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false }
  },
  {
    name: "search_design_skills",
    description: "Search the design skill catalog by capability or topic.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "A design topic such as product audit, motion, Figma, frontend, or branding." } },
      required: ["query"],
      additionalProperties: false
    }
  },
  {
    name: "get_design_skill",
    description: "Load the complete SKILL.md instructions for one design skill.",
    inputSchema: {
      type: "object",
      properties: { name: { type: "string", description: "Exact skill name returned by list_design_skills or search_design_skills." } },
      required: ["name"],
      additionalProperties: false
    }
  },
  {
    name: "get_design_skill_file",
    description: "Read a supporting text file inside a design skill, such as a reference or script.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Exact skill name." },
        path: { type: "string", description: "Relative path inside the skill directory." }
      },
      required: ["name", "path"],
      additionalProperties: false
    }
  }
];

export async function handleRequest(message) {
  const { id, method, params = {} } = message ?? {};

  if (method === "initialize") {
    return {
      jsonrpc: "2.0",
      id,
      result: {
        protocolVersion: params.protocolVersion ?? "2025-06-18",
        capabilities: { tools: { listChanged: false }, resources: { listChanged: false } },
        serverInfo: SERVER_INFO
      }
    };
  }

  if (method === "ping") return { jsonrpc: "2.0", id, result: {} };
  if (method === "tools/list") return { jsonrpc: "2.0", id, result: { tools } };
  if (method === "tools/call") return { jsonrpc: "2.0", id, result: await callTool(params.name, params.arguments) };

  if (method === "resources/list") {
    const catalog = await buildCatalog();
    return {
      jsonrpc: "2.0",
      id,
      result: {
        resources: catalog.map((skill) => ({
          uri: `stoners-design://skills/${encodeURIComponent(skill.name)}`,
          name: skill.name,
          description: skill.description,
          mimeType: "text/markdown"
        }))
      }
    };
  }

  if (method === "resources/read") {
    const prefix = "stoners-design://skills/";
    const uri = String(params.uri ?? "");
    if (!uri.startsWith(prefix)) throw new Error("Unknown resource URI");
    const name = decodeURIComponent(uri.slice(prefix.length));
    const catalog = await buildCatalog();
    const skill = catalog.find((candidate) => candidate.name === name);
    if (!skill) throw new Error(`Unknown design skill: ${name}`);
    return { jsonrpc: "2.0", id, result: { contents: [{ uri, mimeType: "text/markdown", text: await fs.readFile(skill.path, "utf8") }] } };
  }

  if (id === undefined) return null;
  return { jsonrpc: "2.0", id, error: { code: -32601, message: `Method not found: ${method}` } };
}

export async function safelyHandleRequest(message) {
  try {
    return await handleRequest(message);
  } catch (error) {
    return {
      jsonrpc: "2.0",
      id: message?.id ?? null,
      error: { code: -32603, message: error instanceof Error ? error.message : String(error) }
    };
  }
}
