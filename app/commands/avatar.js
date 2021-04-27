const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error.js")
exports.run = async (client, message, args) => {
  
  const input = args.join(' ')
  const user = client.users.cache.get(input) || client.users.cache.find(x => x.username == input) || message.mentions.users.first() || message.author
  
  let embed = new MessageEmbed()
  .setTitle(`**${user.tag}** Avatar`)
  .addField("Save with format", `[**\`jpeg\`**](${user.displayAvatarURL({ format:'jpeg' })}) [**\`png\`**](${user.displayAvatarURL({ format:'png' })}) [**\`webp\`**](${user.displayAvatarURL()})`)
  .setImage(user.displayAvatarURL({dynamic:true, size:4096, format:'png'}))
  .setColor(message.guild.me.displayHexColor)
  .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`)
  message.channel.send(embed)
  .catch ((err) => {
        sendError(err.message, message.channel).catch(console.error)
        console.error(err)
      })
}