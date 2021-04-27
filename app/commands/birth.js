const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {

  const {guild} = message
  const embed = new MessageEmbed()
  .setTitle("Member Birthday")
  .setColor(message.guild.me.displayHexColor)
  .addFields([
    { name : 'Anggota', value : `
    1. <@518419254337470464> \`5 November\`
    2. <@751435165435428945> \`5 Oktober\`
    3. <@609747347479461894> \`18 April\`
    4. <@448349719064870912> \`5 September\`
    5. <@507510243832627201> \`1 Mei\`
    6. <@708175771923120220> \`19 November\`
    7. <@621654987071684609> \`15 November\`
    8. <@605953028859756556> \`21 Oktober\`
    9. <@460083553275871232> \`16 Agustus\`
    10. <@719765113661554788> \`2 Juni\`
    11. <@732550179525230632> \`no_data\`
    `}
  ])
  message.channel.send(embed)
}