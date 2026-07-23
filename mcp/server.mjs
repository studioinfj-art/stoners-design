#!/usr/bin/env node

import readline from "node:readline";
import { safelyHandleRequest } from "./core.mjs";

const input = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
for await (const line of input) {
  if (!line.trim()) continue;
  let response;
  try {
    response = await safelyHandleRequest(JSON.parse(line));
  } catch (error) {
    response = { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } };
  }
  if (response) process.stdout.write(`${JSON.stringify(response)}\n`);
}
