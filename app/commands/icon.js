const { MessageEmbed } = require('discord.js')

module.exports = {
name: "servericon",
  description: "Show icon server",
  run: async (client, message, args) => {
    const {guild} = message
    const embed = new MessageEmbed()
    .setTitle(`**${guild.name}** Icon`)
    .setColor(message.guild.me.displayHexColor)
    .setImage(message.guild.iconURL({dynamic : true, size: 4096, format: 'png'}))
    .setFooter('Powered by Bijibot')
    message.channel.send(embed)
    }
}