const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error.js")

exports.run = async (client, message, args) => {
  
  const embed = new MessageEmbed()
  .setTitle(`FiveM`)
  .setColor(`YELLOW`)
  .setThumbnail(`https://img.icons8.com/color/452/fivem.png`)
  .setDescription(`**FiveM** adalah modifikasi untuk Grand Theft Auto V yang memungkinkan Anda bermain multipemain di server khusus yang dikustomisasi. \n[Unduh](https://fivem.net/)`)
  .addFields([
    { name: `Spesifikasi komputer minimal`, value: `:small_orange_diamond: Windows 8.1
    :small_orange_diamond: Memiliki [GTA V](https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/)
    :small_orange_diamond: CPU Intel Core 2 Q6600 @ 2.40GHz / AMD Phenom 9850 @ 2.5GHz
    :small_orange_diamond: GPU NVIDIA 9800 GT 1GB / AMD HD 4870 1GB / Intel HD GT2
    :small_orange_diamond: RAM 8GB (4 mungkin bisa)
    :small_orange_diamond: HDD 72GB + ~4GB`}
  ])
  .setFooter(`Powered by Bijipedia`)
  
  message.channel.send(embed)
}