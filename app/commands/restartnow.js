const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  const author = message.author.id
  let channel = message.member.voice.channel;
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
  if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
  
  const restarting = new MessageEmbed()
  .setColor('YELLOW')
  .setDescription('Status: **Restarting...**')
      message.channel.send("Restarting...")
      console.log(`${message.author.tag} restarted the bot`)
  client.user.setActivity('Bot is restarting...', { type: 'PLAYING' });
  client.user.setStatus("idle");
  
  //.then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`));
  
      setTimeout(function(){ 
        process.exit(1); 
      }, 1000)

  setTimeout(function(){ 
     client.login(process.env.TOKEN)
  }, 2000)
  
}