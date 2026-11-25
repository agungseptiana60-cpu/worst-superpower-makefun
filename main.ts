// Entry program for the make.fun bounty "Worst Superpower"
// (u-suroto-worst-superpower-461dcdbe).
//
// The entry is one line, at most 140 characters, inventing the most
// useless superpower imaginable. The grader runs this program and reads
// the text it writes to entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line itself, revised against the judge's brief, most important first:
// 1. Genuinely useless: teleportation, the ultimate power, shrunk to a
//    three-centimetre hop to the left, once a day — it cannot save anyone,
//    escape anything, or even cross a room.
// 2. The uselessness lands as a joke you can picture: a hero vanishing in
//    a puff of drama to dodge danger, then reappearing a thumb's width
//    away, facing the wrong way, still in trouble.
// 3. Unexpected on purpose: not slow flight, not invisibility nobody
//    watches — a teleport with a range shorter than a sneeze.
// 4. Tight and specific: three centimetres, to the left, once a day, and
//    the landing detail (facing the wrong way) fixes the power in the world.
// 5. Clear on one reading, no setup beyond the sentence itself. It is not
//    a curse and it quietly helps nobody; the "anywhere" in the opening
//    is the setup, the three centimetres is the punchline.
export const ENTRY_LINE =
  "I can teleport anywhere, but only three centimetres to the left, once a day, and I always land facing the wrong way.";

// Self-check against the gate before writing anything: the entry must
// be UTF-8 text of 1 to 140 characters, not only white space, and — for
// this bounty — one line. Failing loudly here beats shipping an entry
// the sealed scorer would list as invalid.
if (
  ENTRY_LINE.length < 1 ||
  ENTRY_LINE.length > 140 ||
  ENTRY_LINE.trim().length === 0 ||
  ENTRY_LINE.includes('\n')
) {
  throw new Error(
    `entry must be one line of 1 to 140 characters, got ${ENTRY_LINE.length} characters`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
