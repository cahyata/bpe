const ms = require("pretty-ms")
const { MessageEmbed } = require("discord.js")
const sendError = require("../util/error.js")

exports.run = async(client, message, args) => {
  await message.delete();
  const uptime = ms(client.uptime, {verbose:true})
  const embed = new MessageEmbed()
  return sendError('**New Patch use `!stats` instead of `!uptime`**', message.channel)
  
  message.channel.send(embed)
}