import handler from "../api/mcp.mjs";

function createResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    status(code) { this.statusCode = code; return this; },
    json(value) { this.body = value; return this; },
    end() { return this; }
  };
}

async function post(body) {
  const response = createResponse();
  await handler({ method: "POST", headers: { accept: "application/json, text/event-stream" }, body }, response);
  if (response.statusCode !== 200) throw new Error(`Unexpected status ${response.statusCode}`);
  return response.body;
}

const initialized = await post({
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "local-test", version: "1.0.0" } }
});
if (initialized.result?.serverInfo?.name !== "stoners-design") throw new Error("Initialize failed");

const listed = await post({ jsonrpc: "2.0", id: 2, method: "tools/list", params: {} });
if (listed.result?.tools?.length !== 4) throw new Error("Tool listing failed");

const called = await post({
  jsonrpc: "2.0",
  id: 3,
  method: "tools/call",
  params: { name: "list_design_skills", arguments: {} }
});
const catalog = JSON.parse(called.result?.content?.[0]?.text ?? "{}");
if (catalog.count !== 51) throw new Error(`Expected 51 skills, got ${catalog.count}`);

console.log("Remote MCP transport passed initialize, tools/list, and tools/call checks.");
