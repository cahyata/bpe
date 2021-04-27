const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  const embed = new MessageEmbed()
  .setTitle(`Apa itu **Pedia?**`)
  .setColor(`YELLOW`)
  .setDescription(`Secara etimologi, kata **pedia** berasal dari bahasa Yunani kuno “paideia” yang berarti “pendidikan umum”.
  Istilah ini biasa digunakaan sebagai sufiks "-pedia".
  Istilah "pedia" tidak ditemukan di KBBI yang artinya bukan termasuk kosakata Bahasa Indonesia.
  `)
  .setFooter(`Powered by Bijipedia`)
  
  message.channel.send(embed)
}