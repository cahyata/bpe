const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  
  let embed = new MessageEmbed()
  .setTitle("Minitry Of Roleplay")
  .setDescription(`Server GTA V Roleplay yang dapat dimainkan dengan Fivem \`!apaitu fivem\``)
  .addFields([
    { name: 'Indonesia', value: `[Website](https://morp.site/) [Discord](https://morp.site/discord/)`},
    { name: 'Malaysia', value: `[Website](https://my.morp.site/) [Discord](https://my.morp.site/discord/)`},
    { name: 'Filipina', value: `[Website](https://ph.morp.site/) [Discord](https://ph.morp.site/discord/)`}
  ])
  .setColor("YELLOW")
  .setFooter(`Powered by Bijipedia`)
  message.channel.send(embed)
}