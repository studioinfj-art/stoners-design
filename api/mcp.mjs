import { safelyHandleRequest } from "../mcp/core.mjs";

function setCors(request, response) {
  const origin = request.headers.origin;
  if (origin) {
    let validOrigin = false;
    try {
      const parsed = new URL(origin);
      validOrigin = parsed.protocol === "https:" || parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
    } catch {}
    if (!validOrigin) return false;
    response.setHeader("Access-Control-Allow-Origin", origin);
    response.setHeader("Vary", "Origin");
  }
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, Mcp-Protocol-Version, Mcp-Session-Id");
  return true;
}

export default async function handler(request, response) {
  if (!setCors(request, response)) {
    return response.status(403).json({ error: "Origin not allowed" });
  }

  if (request.method === "OPTIONS") return response.status(204).end();
  if (request.method === "GET") {
    response.setHeader("Allow", "POST, OPTIONS");
    return response.status(405).json({
      name: "stoners-design",
      transport: "streamable-http",
      message: "Connect an MCP client to this URL using Streamable HTTP."
    });
  }
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST, OPTIONS");
    return response.status(405).json({ error: "Method not allowed" });
  }

  let payload = request.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      return response.status(400).json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } });
    }
  }
  if (!payload || typeof payload !== "object") {
    return response.status(400).json({ jsonrpc: "2.0", id: null, error: { code: -32600, message: "Invalid Request" } });
  }

  const messages = Array.isArray(payload) ? payload : [payload];
  const results = (await Promise.all(messages.map((message) => safelyHandleRequest(message)))).filter(Boolean);
  if (results.length === 0) return response.status(202).end();

  response.setHeader("Content-Type", "application/json; charset=utf-8");
  return response.status(200).json(Array.isArray(payload) ? results : results[0]);
}
