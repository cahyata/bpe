const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error.js")

exports.run = async(client, message, args, channel) => {

  
  let embed = new MessageEmbed()
  .setTitle('**Bijipedia**🤔')
  .setColor('YELLOW')
  .setDescription('`gtarp` `fivem` `pedia` `gta` `morp`')
  .setFooter('Penggunaan adalah !apaitu <args>')
  
  
  if (message.content.includes(" ")) {
    return;
  } else {
    message.channel.send(message.author, embed)
  }
}