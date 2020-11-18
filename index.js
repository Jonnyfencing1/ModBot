const discord = require("discord.js");
const bot = new discord.Client();
const package = require("./package.json");

function startBot(token, prefix) {
    bot.on("ready", async => {
        console.log(`EasyBot has been deployed ${bot.user.username}`);
        console.log(`Running EasyBot module ${package.version}`);
    })
    bot.on("message", msg => {
        if(msg.channel.type === "dm") return;
        let messagearray = msg.content.split(" ");
        let cmd = messagearray[0];
        let args = messagearray.slice(1);
        if(msg.author.bot) return;

        if(cmd === `${prefix}ping`) {
            msg.reply("pong");
        }
    })

    bot.login(token);
}

module.exports.startBot = startBot;