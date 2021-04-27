const sendError = require("../util/error.js")

exports.run = async(client, message, args) => {
  
  const author = message.author
  const input = args.join(' ')
  const user = client.users.cache.get(input) || client.users.cache.find(x => x.username == input) || message.mentions.users.first()
  
  if(!user) {
    sendError(`${author}\n \`\`\`!sendinvite <tujuan>\n             ^^^^^^\`\`\``, message.channel)
  } else {
    message.delete()
    user.send(`${author.tag} send you an invite link\nhttps://discord.st/bijipecah/`)
    .catch ((e) => {
        sendError(`${message.author}, ${user} tidak dapat menerima direct message`, message.channel)
      })
  }
}