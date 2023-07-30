
import { Configuration, OpenAIApi } from "openai"
import { addAssistantMessage, messages } from "./message.js";
import Colors from 'colors'

import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";


// dotenv.config();
dotenv.config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), '../.env'),
});


let openAi: OpenAIApi

// console.log('process.env.OPEN_API_BASE_PATH', process.env.OPEN_API_BASE_PATH)
// console.log('process.env.OPEN_API_KEY', process.env.OPEN_API_KEY)
export function initBot() {
  openAi = new OpenAIApi(
    new Configuration({
      basePath: process.env.OPEN_API_BASE_PATH,
      apiKey: process.env.OPEN_API_KEY,
    })
  );
}


export async function botAnswer() {
  const chatCompletion = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });
  const answer = chatCompletion.data.choices[0].message?.content;
  addAssistantMessage(answer || '')
  console.log(Colors.rainbow('Bot: '), answer)

}
