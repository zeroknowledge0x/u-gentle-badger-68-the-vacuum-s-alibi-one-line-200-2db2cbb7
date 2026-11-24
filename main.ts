import { mkdirSync, writeFileSync } from 'node:fs';

// The one-line excuse a robot vacuum gives for missing a spot.
// Deterministic: no clock, no randomness, no network, no secrets.
const EXCUSE =
  "That spot wasn't missed. It was deprecated. My sensors still see it; my firmware just doesn't support dust in that format.";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/entry.txt`, EXCUSE, 'utf8');
