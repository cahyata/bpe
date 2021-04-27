const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error.js")

exports.run = async(client, message, args) => {

  
  let embed = new MessageEmbed()
  .setTitle('**Bijihow?** 🤔')
  .setColor('GREEN')
  .setDescription('`hapusCacheFivem` `cariSteamHex` `editRiotID` `pasangSaveGameGTAV`')
  .setFooter('Penggunaan adalah !cara <args>')
  
  
  if (message.content.includes(" ")) {
    return;
  } else {
    message.channel.send(message.author, embed)
    .catch ((err) => {
        sendError(err.message, message.channel).catch(console.error)
        console.error(err)
      
      })
  }
  
}