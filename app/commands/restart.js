const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  const author = message.author.id
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
  if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
  
  const restarting = new MessageEmbed()
  .setColor('YELLOW')
  .setDescription('Status: **Restarting...**')
  
  sendError('Do you wanna restart the bot?\n'
            + 'Restart with `yes` or abort with `no`', message.channel)
                    // First argument is a filter function - which is made of conditions
                    // m is a 'Message' object
  message.channel.awaitMessages(m => m.author.id == message.author.id,
                                {max: 1, time: 10000}).then(collected => {
    // only accept messages by the user who sent the command
    // accept only 1 message, and return the promise after 30000ms = 30s

    // first (and, in this case, only) message of the collection
    if (collected.first().content.toLowerCase() == 'yes') {
      message.channel.send(restarting)
      console.log(`${message.author.tag} restarted the bot`)
      client.user.setActivity('Bot is restarting...', { type: 'PLAYING' });
      setTimeout(function(){ 
        process.exit(1); 
      }, 1000);
      
      setTimeout(function(){ 
        client.login(process.env.TOKEN)
      }, 2000);
      
      
    } else sendError('Restart aborted.', message.channel);      
  })
    .catch((e) => {
    sendError('No answer after 10 seconds, restart aborted', message.channel)
    console.error(e)
  });
}