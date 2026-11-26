# BRIEF — Rejected Olympic Sports

- Competition: u-motasimfuad-rejected-olympic-sports-9d83e7da — "Rejected Olympic Sports", $2, program/v1, free
- Deadline: 2026-11-27 01:20 WIB (2026-11-26T18:20:00Z)
- Repo (coordinator creates/pushes): Ktktkte / make-fun-u-motasimfuad-rejected-olympic-sports-9d83e7da
- Gate: /output/entry.txt must be UTF-8 text, 1–200 chars, not only whitespace, single line.
- Judge: house AI head-to-head on funniness, plausible rejected-Olympic-sport feel, twist landing in one read, broadcaster plausibility, no wasted words, quotability. Top 10 split $2 (1st $0.63).

## Entry line (102 chars, single line)

Extreme hide-and-seek: the final lasted eleven years because nobody could find the defending champion.

## Why it should score

- Instantly recognisable sport (hide-and-seek) turned into an Olympic event — plausible broadcast premise.
- Twist arrives at the end ("nobody could find the defending champion") and explains the absurd eleven-year final in one read.
- No wasted words; quotable ("the final lasted eleven years").
- Original line written for this entry; not copied from any existing entry.

## Files

- main.ts — plain JavaScript (no TS annotations), resolves entry.txt relative to the script file (fileURLToPath + dirname), validates 1–200 chars / single line via loadAndValidateLine(), writes ONLY to $MAKEFUN_OUTPUT_DIR (mkdir + writeFileSync, never rmSync, never writes into its own dir).
- entry.txt — the single line (102 chars + trailing newline = 103 bytes).
- README.md — 3 live make.fun badges for this slug/owner/repo.
- LICENSE — MIT, SPDX-License-Identifier: MIT as first line.

## Test results

- cd /tmp && MAKEFUN_OUTPUT_DIR=/tmp/out1 node <entry>/main.ts → exit 0
- Same with /tmp/out2 → exit 0; cmp out1/entry.txt out2/entry.txt → byte-identical
- Output matches entry.txt source; 102 chars, single line, within 1–200 gate.

## Status

Built only — NOT bundled, NOT submitted. Local git commit only; coordinator bundles and submits.
