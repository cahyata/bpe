const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error.js")


exports.run = async(client, message) => {
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return sendError(`${message.author} command sedang dalam tahap pembuatan`, message.channel)
  const args = message.content.trim().split(';');
  
  let topik = args[0].slice(10)
  if(!topik) return sendError(`${message.author}\n\`\`\`!refleksi <perbuatan>;<menyadari>;<maka>;<cara>\n           ^^^^^^^^^\nSetelah dan sebelum ";" tidak perlu spasi\`\`\`**Output**\n\`\`\`Setelah saya <perbuatan>, saya semakin menyadari bahwa Allah <menyadari>, maka saya <maka> dengan cara:\n<cara>\`\`\``, message.channel)
  
  let menyadari = args[1]
  if(!menyadari) return sendError(`${message.author}\n\`\`\`!refleksi <perbuatan>;<menyadari>;<maka>;<cara>\n                       ^^^^^^^^^\nSetelah dan sebelum ";" tidak perlu spasi\`\`\``, message.channel)
  
  let maka = args[2]
  if(!maka) return sendError(`${message.author}\n\`\`\`!refleksi <perbuatan>;<menyadari>;<maka>;<cara>\n                                   ^^^^\nSetelah dan sebelum ";" tidak perlu spasi\`\`\``, message.channel)
  
  let cara = args[3]
  if(!cara) return sendError(`${message.author}\n\`\`\`!refleksi <perbuatan>;<menyadari>;<maka>;<cara>\n                                          ^^^^\nSetelah dan sebelum ";" tidak perlu spasi\`\`\``, message.channel)
  
  message.channel.send(`${message.author}: Setelah saya ${topik}, saya semakin menyadari bahwa Allah ${menyadari}, maka saya ${maka} dengan cara:\n${cara}`)
  .catch ((err) => {
        sendError(err.message, message.channel).catch(console.error)
        console.error(err)
      })
}