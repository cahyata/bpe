const { MessageEmbed } = require('discord.js')
const sendError = require("../util/error.js")

exports.run = async(client, message, args) => {
  const commandName = args[0];
  
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`The command ${commandName} has been reloaded`);
}