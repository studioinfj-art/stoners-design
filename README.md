![Stoner's Design](assets/banner.png)

# Stoner's Design

51 design skills. One portable collection for product thinking, UX, visual design, Figma, frontend craft, motion, branding, and portfolio storytelling.

The repository combines the open `SKILL.md` format with native manifests for Codex, Claude Code, Gemini CLI, GitHub Copilot CLI, and compatible Cursor workflows. It also includes a dependency-free MCP server for clients that support Streamable HTTP or stdio.

## What it can do

- Shape product strategy, flows, edge cases, audits, and handoff
- Design or critique UI with stronger hierarchy, typography, spacing, interaction, and accessibility
- Work through Figma implementation and design-system tasks
- Build distinctive frontend experiences and translate images into code
- Create brand systems, logos, high-end visual direction, and motion
- Structure portfolio stories and product-design case studies

## Install

### Codex

```bash
codex plugin marketplace add studioinfj-art/stoners-design
codex plugin install stoners-design@stoners-design-marketplace
```

### Claude Code

```bash
claude plugin marketplace add studioinfj-art/stoners-design
claude plugin install stoners-design@stoners-design-marketplace
```

### Gemini CLI

```bash
gemini extensions install https://github.com/studioinfj-art/stoners-design
```

### GitHub Copilot CLI

```bash
copilot plugin install studioinfj-art/stoners-design
```

### Cursor and other Agent Skills clients

Use the repository's `skills/` directory as a skill source, or install individual skills into the client's supported skills directory. Cursor recognizes the same `SKILL.md` structure.

### Any MCP client

Use the hosted Streamable HTTP endpoint:

```text
https://stoners-design-mcp.vercel.app/mcp
```

Codex:

```bash
codex mcp add stoners-design --url https://stoners-design-mcp.vercel.app/mcp
```

Claude Code:

```bash
claude mcp add --transport http stoners-design https://stoners-design-mcp.vercel.app/mcp
```

For other clients, choose the Streamable HTTP transport and paste the same endpoint.

To run the MCP locally instead, clone the repository and configure this stdio server:

```json
{
  "mcpServers": {
    "stoners-design": {
      "command": "node",
      "args": ["/absolute/path/to/stoners-design/mcp/server.mjs"]
    }
  }
}
```

The MCP exposes `list_design_skills`, `search_design_skills`, `get_design_skill`, and `get_design_skill_file`, plus one readable resource per skill.

## Requirements

- Node.js 18 or later for MCP
- The host AI tool's current plugin, extension, Agent Skills, or MCP support
- Any tool-specific dependencies named by an individual skill, such as Figma access or a frontend runtime

## Licensing

The original MCP server, manifests, packaging, and documentation are MIT licensed. Individual skills and bundled resources retain their own upstream terms. Review [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) before redistributing or modifying the collection.
