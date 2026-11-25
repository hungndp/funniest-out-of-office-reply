// Funniest One-Line Out-of-Office Reply — make.fun bounty entry.
// Writes the single out-of-office line (160 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the absence setup, then the reversal —
// urgency gets delegated to watering the plants.
const SETUP =
  "I'm out of the office until Monday, ignoring emails the way my plants ignore me — ";
const PUNCH =
  "if it's urgent, it isn't, and if it is, water the plants on your way out.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 160; // chars — the gate caps the file at 160

// The line sits near the cap: the plants ignore me, I ignore the emails,
// and the punch lands on the last word — out.
function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
