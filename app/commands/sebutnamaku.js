const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  message.channel.send(`Halo, **${message.member.displayName}**! Semoga ibumu bangga.`)
}