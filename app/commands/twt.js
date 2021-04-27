const sendError = require("../util/error.js")

exports.run = async(client, message, args) => {
  const author = message.author.id
  
  if (!message.content.startsWith(" ") || message.author.bot) return; 
  
    await message.delete();
  let say = args.slice(0).join(" ")
  if(!say) return message.reply('Kata-katanya mas!')
  .then (message => {
    message.delete({ timeout: 5000 })
    .catch(console.error);
  });
  
  message.channel.send(say)
  
}