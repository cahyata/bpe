const sendError = require("../util/error.js")

const { MessageEmbed } = require('discord.js')
  
  exports.run = async(client, message) => {
    const author = message.author.id
    const auth = message.author
    const args = message.content.trim().split(';');
  
    await message.delete()
  let say = args.slice(0).join(" ")
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
  if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
    
    let judul = args[0].slice(4)
    if(!judul) return sendError(`${auth}\n\`\`\`!an <judul>;<isi>\n     ^^^^^\`\`\``, message.channel)
    await (sendError => {
    sendError.delete({ timeout: 5000 })
  });
    
    let isi = args[1]
    if(!isi) return sendError(`${auth}\n\`\`\`!an <judul>;<isi>\n             ^^^^\`\`\``, message.channel)
    await (sendError => {
    sendError.delete({ timeout: 5000 })
  });
      

    
  let embed = new MessageEmbed()
  //.setAuthor(`${message.author.tag} Announcement`, `${message.author.avatarURL()}`)
  .setColor('RANDOM')
  .addFields([
    { name: `**${judul}**`, value: isi}
  ])
  
  message.channel.send(embed)
    .catch ((err) => {
        sendError(err.message, message.channel).catch(console.error)
        console.error(err)
      })
  }