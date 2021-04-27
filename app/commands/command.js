const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')
  
exports.run = async(client, message, args) => {
    const {guild} = message
    const help = new MessageEmbed()
    .setTitle('What I can do for you.')
    .setColor('GREEN')
    .addFields([
      { name: 'General', value: `\`!apaitu\` menampilkan **Bijipedia**
      \`!avatar\` menampilkan avatar user
      \`!bapakesra\` mencari bapaknya Esra
      \`!birth\` menampilkan tanggal ulangtahun anggota Bijipecah
      \`!bp\` menampilkan informasi tentang Bijipecah
      \`!calladmin\` memanggil pengurus
      \`!cara\` menampilkan **Bijihow?**
      \`!discord\` menampilkan link discord ${guild}
      \`!icon\` menampilkan ikon server ${guild}
      \`!logo\` menampilkan logo Bijipecah
      \`!refleksi\` membuat refleksi ajaran Damianus Kusviantono
      \`!report\` melapor kepada pengurus server
      \`!sebutnamaku\` meminta untuk nama anda disebut
      \`!sendinvite\` mengirimkan link discord kepada member
      \`!sleep\` memindahkan diri ke voice channel AFK dalam waktu yang anda tentukan
      \`!stats\` menampilkan informasi bot
      \`!steam\` menampilkan link steam Bijipecah
      \`!tepok\` menepok user
      `},
      { name: 'Namek', value:`
      \`!dc\` mendiskonek user
      `},
      { name: 'Admin', value:`
      \`!an\` mengumumkan sesuatu
      \`!muteall\` membisukan semua orang yang ada di voice channel yang sama
      \`!restart\` merestart bot
      \`!restartnow\` merestart bot dengan cara langsung
      \`!send\` mengirimkan dm ke user melalui bot
      \`!unmuteall\` kebalikan dari !muteall
      `},
      { name: 'Music(Maintenance)', value: `
      \`.help\` menampilkan perintah khusus musik
      `}
    ])
    .setFooter('Powered by Bijibot')
    message.channel.send(help).catch ((err) => {
        sendError(err.message, message.channel).catch(console.error)
        console.error(err)
      })

}