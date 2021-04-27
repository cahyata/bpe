const sendError = require("../util/error.js")

exports.run = async(client, message, args) => {
  const admin = '700626230256599092'
  const user = message.author.tag
  let server = message.guild.id, // ID of the guild the message was sent in
  channel = message.channel.id // ID of the channel the message was sent in
  let position = ""
 
  let to = message.mentions.members.first()
  message.delete()
  message.author.send("Anda telah memanggil pengurus server Bijipecah")
  
  setTimeout(function(){ 
    for (var i = 0; i < 1; i++) {
      const Channel = client.channels.cache.get("818359698037538836");
      if (!Channel) return console.error("Couldn't find the channel.");
      Channel.send(`<@&${admin}>`)
      Channel.send(`<@&${admin}>`)
      sendError(`**${user}** membutuhkan <@&${admin}>!\n[Lokasi](https://discord.com/channels/${server}/${channel}/${position})`, Channel)
      .catch ((err) => {
        sendError(err.message, message.channel).catch(console.error)
        console.error(err)
      });
    }                                   
  }, 1000)
  
  
}