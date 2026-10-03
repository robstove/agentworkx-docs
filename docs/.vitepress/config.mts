import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { withMermaid } from "vitepress-plugin-mermaid";

const docsRoot = join(import.meta.dirname, "..");

// The AgentWorkX agent adds pages through pull requests, so the sidebar reads the folder.
// Each page title comes from its frontmatter `title`, else its file name.
function sidebarItems() {
  return readdirSync(docsRoot)
    .filter((file) => file.endsWith(".md") && file !== "index.md")
    .sort()
    .map((file) => {
      const text = readFileSync(join(docsRoot, file), "utf8");
      const title = /^title:\s*(.+)$/m.exec(text)?.[1]?.trim() ?? file.slice(0, -3);
      return { text: title, link: `/${file.slice(0, -3)}` };
    });
}

export default withMermaid({
  title: "AgentWorkX Docs",
  description: "Product documentation for AgentWorkX.",
  base: "/agentworkx-docs/",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    search: { provider: "local" },
    sidebar: [{ text: "Guides", items: sidebarItems() }],
    editLink: {
      pattern: "https://github.com/robstove/agentworkx-docs/edit/main/docs/:path",
    },
  },
});
