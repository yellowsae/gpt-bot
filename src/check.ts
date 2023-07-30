
export function checkExit(input: string) {

  if (input.toLocaleLowerCase() === 'exit'
    || input.toLocaleLowerCase() === 'quit') {
    process.exit()
  }
}
