const sendError = require("../util/error.js");

exports.run = async (client, message, args) => {
  const author = message.author.id;
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return sendError(`<@${author}> anda tidak memiliki akses`, message.channel);
  if (!message.guild.me.hasPermission("ADMINISTRATOR"))
    return sendError(`<@${author}> anda tidak memiliki akses`, message.channel);

  if (message.member.voice.channel) {
    let channel = message.guild.channels.cache.get(
      message.member.voice.channel.id
    );
    for (const [memberID, member] of channel.members) {
      // I added the following if statement to mute everyone but the invoker:
      // if (member != message.member)

      // This single line however, nested inside the for loop, should mute everyone in the channel:
      member.voice.setMute(false);
      message.react("✅");
    }
  } else {
    sendError(`${message.author} you need to join a voice channel first!`, message.author);
  }
};
