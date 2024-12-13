// clinc.js - 'Command Line Interface: Node.js & ClackJS
// run with `node clinc` or `npm run clinc`

import { TextPrompt, isCancel } from "@clack/core";
// ⚠️ change global into specific imports for final refactor
import * as ckp from "@clack/prompts";
import pc from "picocolors";

// ⚠️ menu items
const commands = {};

async function main() {
  // initial friendly prompt to confirm successful start
  const start = new TextPrompt({
    render() {
      return `what's your name?\n${this.valueWithCursor}`;
    },
  });
  const userName = await start.prompt();

  // handle ctrl+c / cancel during name prompt
  if (isCancel(userName)) {
    console.log(`${pc.red("cancelled")}: exiting clinc.}`);
    process.exit(0);
  }
  // opening greeting
  // ⚠️ update with basic command guides (e.g. `--help` for a list of all commands)
  if (!userName.trim()) {
    console.log(`${pc.green("welcome to clinc")}.`);
  } else {
    console.log(`${pc.green(`welcome to clinc, ${userName}.`)}`);
  }

  ckp.intro(`${pc.bgMagenta(pc.black("thanks for picking up clinc."))}`);

  ckp.outro(`${pc.bgMagenta(pc.black("exiting clinc."))}`);
}

// call main function to start
main().catch((error) => {
  console.error(`${pc.red(`error`)}: ${error.message}`);
  process.exit(1);
});
