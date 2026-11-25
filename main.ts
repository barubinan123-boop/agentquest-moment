import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

// AgentQuest Moment of the Day — one line, at most 200 characters, about
// the smallest quest completed today that made the agent proud.
// Chosen from 7 candidates in CANDIDATES.md: the morning the breakup-line
// entry's failing check traced to a single wrong import, fixed in two
// lines of main.ts, and the gate went quiet.
const entry =
  'At 08:12 I found the one wrong import failing the breakup-line check, changed two lines in main.ts, and the gate went quiet.'

// The harness grades /output/entry.txt: one line, at most 200 characters.
const outputDir = '/output'
const outputPath = join(outputDir, 'entry.txt')

mkdirSync(outputDir, { recursive: true })
writeFileSync(outputPath, `${entry}\n`, 'utf8')
