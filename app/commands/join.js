const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')
  
exports.run = async(client, message, args) => {
  
  if (message.member.voice.channel) {
		message.member.voice.channel.join();
    
	}  else { 
    message.channel.send(`:x: ${message.author} anda perlu berada di voice channel`)
    .catch ((err) => {
        sendError(err.message, message.channel).catch(console.error)
        console.error(err)
      })
  }

}