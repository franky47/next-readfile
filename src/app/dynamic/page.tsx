import fs from "node:fs/promises";
import { resolve } from "../../lib/paths";

export const dynamic = "force-dynamic";

export default async function DynamicPage() {
  const filePath = resolve(import.meta.url, "../relative.txt");
  console.log("[DYNAMIC] imr: ", import.meta.url);
  console.log("[DYNAMIC] filePath: ", filePath);
  const contents = await fs.readFile(filePath, "utf-8");
  return <p>{contents}</p>;
}
