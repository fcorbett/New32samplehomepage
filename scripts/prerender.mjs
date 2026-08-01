/**
 * Post-build prerender of the home route into docs/index.html.
 * Uses the production SSR bundle (vite build --ssr) so imagetools
 * URLs resolve to /assets/* — not the /@imagetools/* dev middleware paths.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const indexPath = path.resolve(root, "docs/index.html");
const ssrEntry = path.resolve(root, "docs/.ssr/entry-server.js");

async function main() {
  if (!fs.existsSync(indexPath)) {
    console.error("docs/index.html missing — run vite build first");
    process.exit(1);
  }
  if (!fs.existsSync(ssrEntry)) {
    console.error("docs/.ssr/entry-server.js missing — run vite SSR build first");
    process.exit(1);
  }

  const { render } = await import(pathToFileURL(ssrEntry).href);
  const appHtml = render("/");

  if (appHtml.includes("/@imagetools/")) {
    console.error("Prerender produced /@imagetools/ URLs — SSR bundle is wrong");
    process.exit(1);
  }

  let html = fs.readFileSync(indexPath, "utf-8");
  if (!html.includes('<div id="root"></div>')) {
    // Already prerendered or unexpected shape — reset root if needed
    if (html.includes('id="root"')) {
      html = html.replace(
        /<div id="root">[\s\S]*?<\/div>\s*<script type="module"/,
        '<div id="root"></div>\n    <script type="module"',
      );
    } else {
      console.error('Could not find #root in docs/index.html');
      process.exit(1);
    }
  }

  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${appHtml}</div>`,
  );

  fs.writeFileSync(indexPath, html);
  console.log("Prerendered / into docs/index.html");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
