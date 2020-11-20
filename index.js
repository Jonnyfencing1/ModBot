const discord = require("discord.js");
const bot = new discord.Client();
const mb = require("./package.json");

function startBot(token, prefix) {
    if(token == null) {
        console.log(`Please provide a token to use ModBot`);
    }
    if(prefix == null) {
        console.log(`Please provide a prefix to use for ModBot`);
    }
    bot.on("ready", ready => {
        console.log(`ModBot has been deployed ${bot.user.username}`);
        console.log(`Running ModBot module ${mb.version}`);
    })
    bot.on("message", msg => {
        if(msg.channel.type === "dm") return;
        let msgArray = msg.content.split(" ");
        let cmd = msgArray[0];
        let args = msgArray.slice(1);
        if(msg.author.bot) return;

        if(cmd === `${prefix}ping`) {
            msg.reply("pong");
        }
    })

    bot.login(`${token}`);
}

module.exports.startBot = startBot;