import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I've worked here three years and my badge opens every door except the one to a raise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
