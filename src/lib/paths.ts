import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const nextJsRootDir = path.resolve(__dirname, '../../')

export function resolveViaURL(importMetaUrl: string, ...paths: string[]) {
  return fileURLToPath(new URL(path.join(...paths), importMetaUrl).toString())
}

export function resolveViaProcessCwd(
  importMetaUrl: string,
  ...paths: string[]
) {
  const dirname = path.dirname(fileURLToPath(importMetaUrl))
  const absPath = path.resolve(dirname, ...paths)
  // Required for ISR serverless functions to pick up the file path
  // as a dependency to bundle.
  return path.resolve(process.cwd(), absPath.replace(nextJsRootDir, '.'))
}
