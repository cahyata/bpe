const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  const embed = new MessageEmbed()
  .setTitle(`Grand Theft Auto (GTA)`)
  .setColor(`YELLOW`)
  .setDescription(`Permainan video aksi-petualangan yang dibuat oleh DMA Design (sekarang Rockstar North) dan diterbitkan oleh Rockstar Games. Permainan ini memungkinkan pemain untuk mengambil peran seorang penjahat yang dapat berkeliaran dengan bebas di sekitar kota besar. Berbagai misi yang ditetapkan untuk penyelesaian, seperti perampokan bank, pembunuhan, dan kejahatan lainnya. Permainan ini awalnya ditujukan untuk diberi nama "Race N Chase". [Wikipedia](https://id.wikipedia.org/wiki/Grand_Theft_Auto)
  `)
  .addFields([
    { name: 'Seri permainan video utama', value: `[Grand Theft Auto](https://id.wikipedia.org/wiki/Grand_Theft_Auto_(permainan_video))
    [Grand Theft Auto 2](https://id.wikipedia.org/wiki/Grand_Theft_Auto_2)
    [Grand Theft Auto III](https://id.wikipedia.org/wiki/Grand_Theft_Auto_III)
    [Grand Theft Auto: Vice City](https://id.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City)
    [Grand Theft Auto: San Andreas](https://id.wikipedia.org/wiki/Grand_Theft_Auto:_San_Andreas)
    [Grand Theft Auto IV](https://id.wikipedia.org/wiki/Grand_Theft_Auto_IV)
    [Grand Theft Auto V](https://id.wikipedia.org/wiki/Grand_Theft_Auto_V)
    `, inline: true},
    { name: 'Release date', value: `1997
    1999
    2001
    2002
    2004
    2008
    2013`, inline: true}
  ])
  .setFooter(`Powered by Bijipedia`)
  
  message.channel.send(embed)
}