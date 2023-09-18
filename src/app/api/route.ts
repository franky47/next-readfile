import { NextResponse } from 'next/server'
import fs from 'node:fs/promises'
import { resolveViaProcessCwd } from '../../lib/paths'

export const dynamic = 'force-dynamic'

export async function GET() {
  const filePath = resolveViaProcessCwd(import.meta.url, '../relative.txt')
  console.log('[ROUTE] imr: ', import.meta.url)
  console.log('[ROUTE] filePath: ', filePath)
  const contents = await fs.readFile(filePath, 'utf-8')
  return NextResponse.json({
    contents,
  })
}
