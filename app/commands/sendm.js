const sendError = require("../util/error.js")

exports.run = async(client, message, args) => {
  const author = message.author.id
  
    await message.delete();
  let say = args.slice(0).join(" ")
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
  if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
  if(!say) return sendError(`${message.author}\n\`\`\`!sendm <pesan>\n        ^^^^^\`\`\``, message.channel)
  .then (sendError => {
    message.delete({ timeout: 5000 })
    .catch(console.error);
  });
  
  message.channel.send(say)
  
  
  
}