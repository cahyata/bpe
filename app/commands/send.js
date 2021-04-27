const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error.js")

exports.run = async (client, message, args) => {
  
  const cok = message.author
  const cokname = message.author.username
  const input = args[0]
  const user = client.users.cache.get(input) || client.users.cache.find(x => x.username == input) || message.mentions.users.first()
  let mentionMessage = `${args.slice(1).join(" ")}`
  let oke = new MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Pesan terkirim ke ${user} berisi\n> ${mentionMessage}`)
  
  if (!message.member.roles.cache.has('700626230256599092')) {
    sendError(`${message.author} anda tidak memiliki akses`, message.channel)
  } 
  
  if(!user) {
    sendError(`${cok}\n\`\`\`!send <tujuan> <pesan>\n       ^^^^^^\`\`\``, message.channel)
  } else if(!mentionMessage){
    sendError(`${cok}\n\`\`\`!send <tujuan> <pesan>\n                ^^^^^\`\`\``, message.channel)
    } else {
      message.delete()
      message.author.send(oke)
      user.send(`${mentionMessage}`)
      .catch ((e) => {
        sendError(`${cok}, ${user} tidak dapat menerima direct message`, message.channel)
        console.error(e)
      })
  }
}