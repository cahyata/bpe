const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  let channel = message.member.voice.channel;
  channel.leave()
  message.channel.send(`I've been disconnected by ${message.author.tag}`)
}