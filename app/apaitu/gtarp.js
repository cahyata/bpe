const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  const embed = new MessageEmbed()
  .setTitle(`GTA Roleplay`)
  .setColor(`YELLOW`)
  .setDescription(`Roleplay adalah aktivitas bermain peran dimana seseorang memainkan suatu peran menjadi orang atau tokoh lain. Istilah ini lebih dikenal dengan istilah RP.
  [Belajar melalui video](https://youtu.be/E4R05J-kopA)`)
  .addFields([
    { name: `Discord GTA V RP`, value: ` [MORP INDONESIA](https://morp.site/discord/) [KOTAHILANG](https://discord.gg/8ZEVyBSVtr) [HOPEFULLY](https://discord.gg/uCPTE9hp) [INDOPRIDE](https://discord.gg/NNZ9zVnauj) [SOI](https://discord.st/stateofindonesia/) [Garuda](https://discord.com/invite/pFvZYcJ3TD)`}
  ])
  .setFooter(`Powered by Bijipedia`)
  
  message.channel.send(embed)
}