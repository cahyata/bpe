const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  const embed = new MessageEmbed()
  .setTitle('Cara memasang save game di GTA V')
  .setColor('GREEN')
  .setDescription(`1. Download bahan di [link ini](https://id.gta5-mods.com/misc/ultimate-100-perfect-game-save-flava0ne)
  2. Buka bahan dengan winRAR atau 7zip
  3. Baca \`ReadMe.txt\` untuk cara memasangnya
  `)
  .setFooter('Powered by Bijihow')
  
  message.channel.send(embed)
}