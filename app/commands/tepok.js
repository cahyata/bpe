exports.run = async (client, message, args) => {
  let user = message.mentions.users.first()
  const sendError = require("../util/error.js")
  
  if (message.mentions.has(client.user)) {
    return sendError(`${message.author} Berani sama saya?`, message.channel )
  }
  
  if (!user) return message.channel.send(`${message.author} SOPO SING DI TEPOK, COK?`)
  
  message.channel.send(`Mmmmmmaaaaaaaaaaaaaakkkkkkkkk .................. `).then (async (msg) =>{
    msg.delete({ timeout : 3000})
    
    setTimeout(function(){ 
      message.channel.send(`*Mak datang`).then(message => {
    message.delete({ timeout: 3000 })})
    }, 3000)
    
    setTimeout(function(){ 
      message.channel.send(`${user} has been *tepoked* by **mak**`);
    }, 7000);
  })
}