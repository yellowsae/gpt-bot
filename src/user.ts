import readlineSync from 'readline-sync'
import Colors from 'colors'
import { addUserMessage } from './message.js'


export function askQuestion() {
  const userInput = readlineSync.question(Colors.red(`You:  `))
  addUserMessage(userInput)
  return userInput
}
