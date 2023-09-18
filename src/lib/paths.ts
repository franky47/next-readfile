import path from "node:path";
import { fileURLToPath } from "node:url";

export function resolve(importMetaUrl: string, ...paths: string[]) {
  return fileURLToPath(new URL(path.join(...paths), importMetaUrl).toString());
}
