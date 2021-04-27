const sendError = require("../util/error.js");
const { MessageEmbed } = require(`discord.js`);

exports.run = async (client, message, args) => {
  const input = args.join(" ");
  const author = message.author.id;
  const user =
    client.users.cache.get(input) ||
    client.users.cache.find(x => x.username == input) ||
    message.mentions.users.first();
  let reason = args.slice(1).join(" ")

  let success = new MessageEmbed()
    .setDescription(
      `${message.author} disconnect ${user} from **voice channel**\nReason: ${reason}`
    )
    .setColor("GREEN");

  let success2 = new MessageEmbed()
    .setDescription(
      `${message.author} disconnect ${user} from **voice channel**`
    )
    .setColor("GREEN");

  if (!message.member.roles.cache.has("720983784064811029")) {
    sendError(
      "**You need the `Namek` role to use `!dc` command**",
      message.author
    );
    message.delete();
  }

  if (!user)
    return sendError(
      `${message.author}\n\`\`\`!dc <user> <reason>\n     ^^^^\n<reason> is optional\`\`\``,
      message.channel
    );

  if (!reason) {
    message.channel.send(success2);
    message.guild.member(user).voice.kick();
    message.delete();
  } else {
    message.guild.member(user).voice.kick();
    message.delete();
    message.channel.send(success);
  }
};
