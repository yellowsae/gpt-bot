import { Configuration, OpenAIApi } from "openai"

import dotenv from "dotenv";
dotenv.config();


const openAi = new OpenAIApi(
  new Configuration({
    basePath: "https://jiushi21.win/v1",
    apiKey: process.env.OPEN_API_KEY,
  })
);

(async () => {
  const chatCompletion = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "vuejs的作者是谁?",
      },
    ],
  });

  const { choices } = chatCompletion.data;
  console.log(choices[0].message?.content);
})();
