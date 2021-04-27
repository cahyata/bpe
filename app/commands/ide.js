const sendError = require("../util/error.js");
const { MessageEmbed } = require("discord.js");
const date = new Date().toLocaleString();

exports.run = async (client, message, args) => {
  const author = message.author.id;
  const userID = message.author.id;
  let server = message.guild.id,
    channel = message.channel.id;
  let position = "";
  const ide = client.channels.cache.get("818359698037538836");
  let say = args.slice(0).join(" ");

  let embed = new MessageEmbed()
    .setColor("#7ED321")
    .setTitle("Feedback")
    .setDescription(`${say}\n[Konteks](https://discord.com/channels/${server}/${channel}/${position})`)
    .setFooter(`${message.author.tag}`, `${message.author.avatarURL()}`)
    .setTimestamp();
  

  const db = require("quick.db");
  const now = Date.now();
  if (db.has(`cd_${message.author.id}`)) {
    const expirationTime = db.get(`cd_${message.author.id}`) + 10000;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return sendError(
        `${message.author} ${timeLeft.toFixed(1)} detik lagi untuk dapat menggunakan\`!ide\``,
        message.channel
      );
    }
  }
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`);
  }, 10000);

  if (!say) {
    sendError(
      `${message.author}\n**Format**\n\`\`\`!ide <kritik/saran>\n      ^^^^^^^^^^^^\`\`\``,
      message.channel
    );
  } else {
    let success = new MessageEmbed()
  .setColor("#7ED321")
  .addField('**Umpan balik anda telah terkirim**', say)
    message.delete();
    message.author.send(success)
    ide.send(embed);
  }
  e => {
    console.error(e);
  };
};
