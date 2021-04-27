const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  const author = message.author.id
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
  if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return sendError(`<@${author}> anda tidak memiliki akses`, message.channel)
  
  const restarting = new MessageEmbed()
  .setColor('YELLOW')
  .setDescription('Status: **Shutting down...**')
  
  sendError('Apakah anda ingin mematikan bot?\n'
            + 'Mematikan dengan `yes` atau tidak dengan `no`', message.channel)
                    // First argument is a filter function - which is made of conditions
                    // m is a 'Message' object
  message.channel.awaitMessages(m => m.author.id == message.author.id,
                                {max: 1, time: 10000}).then(collected => {
    // only accept messages by the user who sent the command
    // accept only 1 message, and return the promise after 30000ms = 30s

    // first (and, in this case, only) message of the collection
    if (collected.first().content.toLowerCase() == 'yes') {
      message.channel.send(restarting)
      console.log(`${message.author.tag} shutted the bot`)
      client.user.setActivity('Shutting down...', { type: 'PLAYING' });
      client.user.setStatus('dnd');
      setTimeout(function(){ 
        client.destroy();
      }, 1500);
      

      
      
    } else sendError('Mematikan bot dibatalkan', message.channel);      
  })
    .catch((e) => {
    sendError('Tidak ada jawaban setelah 10 detik, operasi dibatal.', message.channel)
    console.error(e)
  });
}