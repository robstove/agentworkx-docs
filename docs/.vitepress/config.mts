import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { withMermaid } from "vitepress-plugin-mermaid";

const docsRoot = join(import.meta.dirname, "..");

// The AgentWorkX agent adds pages through pull requests, so the sidebar reads the folder.
// Each page takes its title, position, and audience group from frontmatter `title`, `order`, and
// `group`. A page without `order` goes last in its group; a page without `group` goes to "More".
const groups = ["Start here", "Use AgentWorkX", "Build and run agents", "More"];

function sidebar() {
  const pages = readdirSync(docsRoot)
    .filter((file) => file.endsWith(".md") && file !== "index.md")
    .map((file) => {
      const text = readFileSync(join(docsRoot, file), "utf8");
      const field = (name: string) => new RegExp(`^${name}:\\s*(.+)$`, "m").exec(text)?.[1]?.trim();
      return {
        text: field("title") ?? file.slice(0, -3),
        link: `/${file.slice(0, -3)}`,
        order: Number(field("order") ?? Infinity),
        group: groups.includes(field("group") ?? "") ? field("group")! : "More",
      };
    })
    .sort((a, b) => a.order - b.order || a.text.localeCompare(b.text));

  return groups
    .map((group) => ({
      text: group,
      items: pages.filter((page) => page.group === group).map(({ text, link }) => ({ text, link })),
    }))
    .filter((group) => group.items.length > 0);
}

export default withMermaid({
  title: "AgentWorkX Docs",
  description: "Product documentation for AgentWorkX.",
  base: "/agentworkx-docs/",
  cleanUrls: true,
  // The AgentWorkX agent writes pages, and '{onclick=...}' attribute syntax would run script here.
  markdown: { attrs: { disable: true } },
  lastUpdated: true,
  // The signup surface carries one dark theme, so the docs do too.
  appearance: "force-dark",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/agentworkx-docs/logo.svg" }],
    ["meta", { name: "theme-color", content: "oklch(5% 0.005 280)" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",
    search: { provider: "local" },
    sidebar: sidebar(),
    lastUpdated: { formatOptions: { dateStyle: "medium" } },
    editLink: {
      pattern: "https://github.com/robstove/agentworkx-docs/edit/main/docs/:path",
    },
  },
});
