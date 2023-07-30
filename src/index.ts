import { Configuration, OpenAIApi } from "openai"
import dotenv from "dotenv";
import readlineSync from 'readline-sync'
import Colors from 'colors'
import { startLoading, stopLoading } from "./loading.js";

dotenv.config();

const openAi = new OpenAIApi(
  new Configuration({
    basePath: process.env.OPEN_API_BASE_PATH,
    apiKey: process.env.OPEN_API_KEY,
  })
);

const messages: { role: 'user' | 'assistant'; content: string }[] = [];

(async () => {

  while (true) {
    // 获取用户的输入
    const userInput = readlineSync.question(Colors.red(`You:  `))


    // 判断用户的输入
    if (userInput.toLowerCase() === 'exit') {
      console.log('退出')
      return
    } else if (userInput.toLowerCase() === 'quit') {
      console.log('退出')
      return
    }



    // 将用户的输入添加到消息列表中
    messages.push({
      role: 'user',
      content: userInput
    })

    // 开启一个loading
    startLoading()
    stopLoading()

    const chatCompletion = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
      // messages: [
      //   {
      //     role: "user",
      //     content: userInput,
      //     // content: "Hello, I'm a human",
      //   },
      // ],
    });

    const answer = chatCompletion.data.choices[0].message?.content;
    console.log(Colors.rainbow('Bot: '), answer)


    // 把机器人的回答添加到消息列表中
    messages.push({
      role: 'assistant',
      content: answer || ''
    })
  }
})();


