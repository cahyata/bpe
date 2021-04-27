const sendError = require("../util/error.js")
const { MessageEmbed } = require("discord.js")

exports.run = async(client, message, args) => {
  const oke = new MessageEmbed()
  .setColor('#ff0000')
  .setDescription(`${message.author} decided to meneng`)
  
  if(!message.member.voice.channel) return sendError(`${message.author} you need to join voice channel first`, message.channel)
  message.delete()
  message.member.voice.setMute(true);
  sendError(`${message.author} decided to meneng`, message.channel)
}