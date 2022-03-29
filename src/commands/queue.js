const Discord = require('discord.js')
const vcodes = require("vcodes.js");
const botdata = require("../database/models/botlist/bots.js")
module.exports.run = async (client,message,args) => {
   if (!message.member.roles.cache.some((role) => role.name === '[Bot Testers]')) return message.channel.send("Ah, I think you are not a bot [Bot Testers] sorry!");
   let x = await botdata.find();
   let bots = x.filter(x => x.status === "UnApproved")
   const embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
   .setDescription(`**Total ${bots.length || "0"} bots in queue.**`)
   .setColor("#7289da")
   .addField("Bots in queue", `${!bots ? "" : bots.map(a => "<@"+a.botID+"> \`("+a.botID+")\` Owner: <@"+a.ownerID+"> | [[Invite Bot]](https://discord.com/api/oauth2/authorize?client_id="+a.botID+"&permissions=0&scope=bot&guild_id=891125044670005260)").join("\n") || "there is no bots in queue"}`, true)
   message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "queue",
    description: "",
    usage: ""
  };
