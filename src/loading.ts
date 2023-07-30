import ora from "ora"
import type { Ora } from "ora"

let spinner: Ora

export function startLoading() {
  spinner = ora('thinking...\n').start()
}

export function stopLoading() {
  spinner.stop()
}
