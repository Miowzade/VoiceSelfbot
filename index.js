const discord = require("discord.js-self")
const keepAlive = require("./server");
// npm i discord@12
// npm i discord.js-selfbot
// npm i discord.js-self
const selfbot = new discord.Client()
require("dotenv").config()

const channel_id = "947970192565223474"
selfbot.once("ready", () => {
    const channel = selfbot.channels.cache.get(channel_id)
    channel.join()
})

keepAlive();
selfbot.login(process.env.TOKEN);