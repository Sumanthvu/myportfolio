import { mkdir, readFile, writeFile } from "node:fs/promises";

const pages = [
  [
    "renzo",
    "RENZO",
    "Explore RENZO: collaborative AI chats, Socket.IO streaming, permission-aware access and controlled JavaScript execution.",
  ],
  [
    "yaatra-ai",
    "Yaatra AI",
    "Explore Yaatra AI: a personalized travel planner integrating React, Node.js, FastAPI, CrewAI and Gemini.",
  ],
  [
    "orca",
    "Orca",
    "Explore Orca: constant-product AMM mechanics, Solana, Anchor programs, liquidity accounting and PDA vaults.",
  ],
  [
    "repufi",
    "RepuFi",
    "Explore RepuFi: GitHub reputation signals, stake-backed vouches, soulbound badges and on-chain verification.",
  ],
];
const html = await readFile(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);
for (const [slug, title, description] of pages) {
  const directory = new URL(`../dist/projects/${slug}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(
    new URL("index.html", directory),
    html
      .replace(
        /<title>.*?<\/title>/s,
        `<title>${title} — Project study / Sumanth V U</title>`,
      )
      .replace(
        /(<meta\s+name="description"\s+content=")[^"]*(")/s,
        `$1${description}$2`,
      ),
  );
}
console.log("Generated 4 directly accessible project pages.");
