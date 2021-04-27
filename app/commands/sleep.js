exports.run = async (client, message, args) => {
  const sendError = require("../util/error.js");

  const input = args.join(" ");
  const user =
    client.users.cache.get(input) ||
    client.users.cache.find(x => x.username == input) ||
    message.author;
  const voiceChannel = message.member.voice.channel;
  const voiceChannelID = message.member.voice.channelID;

  if (voiceChannelID === "699919657976594533") {
    return sendError(
      `${message.author} you've already in AFK zone`,
      message.channel
    );
  }

  let time = args[0];
  if (!time)
    return sendError(
      `${message.author}\n\`\`\`!sleep <time>\n        ^^^^\nTime is in miliseconds(ms)\`\`\``,
      message.channel
    );

  if (!message.member.voice.channel) {
    return sendError(
      `<@${message.author.id}> you need to join voice channel first!`,
      message.channel
    );
    message.react("❎");
  }

  try {
    message.author.send(
      `Anda akan berpindah otomatis ke tempat AFK dalam waktu \`${time}ms\` lagi`
    );
    setTimeout(function() {
      message.member.voice.setChannel("699919657976594533");
      message.react("✅");
      message.author.send("You have been moved to AFK zone. My job is done.")
    }, time);
  } catch {}
};
