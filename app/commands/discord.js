exports.run = async (client, message) => {
  var {guild} = message
  
  let author = message.author
  message.channel.send(`${author} ${guild.name} invite link\nhttps://discord.st/bijipecah/`)
  if(message.channel.type === 'dm') { `${guild} invite link (Whitelisted server)\nhttps://discord.st/bijipecah/`}
}