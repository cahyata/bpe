const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  const embed = new MessageEmbed()
  .setTitle('Cara mencari steam hex')
  .setColor('GREEN')
  .setDescription(`1. Copy page URL profil steam yang dituju (Klik kanan > Copy Page URL)
  2. Buka website [steam.id.pro](https://steamid.pro/id/)
  3. Pastekan link steam tadi dan go
  4. Cari bagian \`FiveM, HEX\` (contoh: steam:000000000000000)`)
  .setFooter('Powered by Bijihow')
  
  message.channel.send(embed)
}