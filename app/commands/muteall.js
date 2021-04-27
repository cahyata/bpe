const sendError = require("../util/error.js");

exports.run = async (client, message, args) => {
  const author = message.author.id;
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return sendError(`<@${author}> anda tidak memiliki akses`, message.channel);
  if (!message.guild.me.hasPermission("ADMINISTRATOR"))
    return sendError(`<@${author}> anda tidak memiliki akses`, message.channel);

  const db = require("quick.db");
  const now = Date.now();
  if (db.has(`cd_${message.author.id}`)) {
    const expirationTime = db.get(`cd_${message.author.id}`) + 5000;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return sendError(
        `${message.author} ${timeLeft.toFixed(1)} detik lagi untuk dapat menggunakan\`!muteall\``,
        message.channel
      );
    }
  }
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`);
  }, 5000);

  if (message.member.voice.channel) {
    let channel = message.guild.channels.cache.get(
      message.member.voice.channel.id
    );
    for (const [memberID, member] of channel.members) {
      // I added the following if statement to mute everyone but the invoker:
      // if (member != message.member)

      // This single line however, nested inside the for loop, should mute everyone in the channel:
      member.voice.setMute(true);
      message.react("✅");
    }
  } else {
    sendError(
      `${message.author} you need to join a voice channel first!`,
      message.author
    );
  }
};
