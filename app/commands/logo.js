const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  message.channel.send('⌛Loading logo...')
    .then (async (message) => {
    message.delete({ timeout : 2000})
    
    
    const embed = new MessageEmbed()
  .setColor("#2f3136")
  .setTitle("**BIJIPECAH LOGO**")
  .setImage('https://i.imgur.com/GzB3RoG.png')
    
  setTimeout(function (){
    message.channel.send(embed)
  }, 2000);
  
  })
           
  
}