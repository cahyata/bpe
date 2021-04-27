const cron = require("cron");
const MessageEmbed = require('discord.js')


exports.run = async (client, message, args) => {
  
  const devID = '518419254337470464';
  const dev = await client.members.fetch(devID);
  const devav = `<@${devID}>`
  
  let embed = new MessageEmbed()
  .setTitle(`**__${client.username}__**`)
  .setDescription(`Made with ❤ by **${dev.tag}**`)
  .setThumbnail(`${devav.displayAvatarURL}`)
  .setColor("#2f3136")
  .setFooter(`Diminta oleh: ${message.author.username}`)
  .setTimestamp()
  message.channel.send(embed)
}