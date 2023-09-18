import fs from 'node:fs/promises'
import { resolveViaProcessCwd } from '../../lib/paths'

export const revalidate = 30

export default async function StaticPage() {
  const filePath = resolveViaProcessCwd(import.meta.url, '../relative.txt')
  console.log('[STATIC] imr: ', import.meta.url)
  console.log('[STATIC] filePath: ', filePath)
  const contents = await fs.readFile(filePath, 'utf-8')
  return <p>{contents}</p>
}
