import fs from "node:fs/promises";
import { resolve } from "../../lib/paths";

export default async function StaticPage() {
  const filePath = resolve(import.meta.url, "../relative.txt");
  console.log("[STATIC] imr: ", import.meta.url);
  console.log("[STATIC] filePath: ", filePath);
  const contents = await fs.readFile(filePath, "utf-8");
  return <p>{contents}</p>;
}
