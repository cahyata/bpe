const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error.js")
exports.run = async (client, message, args) => {
  const {guild} = message

  const embed1 = new MessageEmbed()
  .setTitle(`About **${guild.name}**`)
  .setDescription('Created on September 15, 2019 by <@751435165435428945> (Discord server)')
  .setColor(message.guild.me.displayHexColor)
  .addFields([
    { name : 'Community', value : `[**\`Steam\`**](https://steamcommunity.com/groups/bijipecah) [**\`Discord\`**](https://discord.com/invite/gJfHtJX) [**\`Telegram\`**](https://t.me/joinchat/WHikWST2AOxtGrF3) [**\`Whatsapp\`**](https://chat.whatsapp.com/GXynv3eFVzJBAGmRRGZRt6)`},
    { name : 'Administrators', value : `1. <@518419254337470464> [**\`Information\`**](http://tiny.cc/2c0wtz)
    2. <@751435165435428945> [**\`Information\`**](http://tiny.cc/7c0wtz)`},
    { name : 'Members', value : `3. <@609747347479461894> [**\`Information\`**](http://tiny.cc/8c0wtz)
    4. <@448349719064870912> [**\`Information\`**](http://tiny.cc/ac0wtz)
    5. <@507510243832627201> [**\`Information\`**](http://tiny.cc/bc0wtz)
    6. <@708175771923120220> [**\`Information\`**](http://tiny.cc/cc0wtz)
    7. <@621654987071684609> [**\`Information\`**](http://tiny.cc/ec0wtz)
    8. <@605953028859756556> [**\`Information\`**](http://tiny.cc/fc0wtz)
    9. <@460083553275871232> [**\`Information\`**](http://tiny.cc/gc0wtz)
    10. <@719765113661554788> [**\`Information\`**](http://tiny.cc/hc0wtz)
    11. <@732550179525230632> [**\`Information\`**](http://tiny.cc/ic0wtz)
    \`Information\` is a fast track to <#831172227424190504>
    `}
  ])
  
  message.channel.send(embed1)
 
  
  .catch ((err) => {
        sendError(err.message, message.channel).catch(console.error)
        console.error(err)
      })
}