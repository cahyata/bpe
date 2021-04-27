exports.run = async(client, message, args) => {
  const admin = '700626230256599092'
  const user = message.author.username
  
  let to = message.mentions.members.first()
 await message.delete({ timeout : 3000})
  message.reply("panggilan akan segera disampaikan.")
  .then (message => {
    message.delete({ timeout : 3000})
  })
  setTimeout(function(){ 
    for (var i = 0; i < 2; i++) {
      const Channel = client.channels.cache.get("806869336995397672");
      if (!Channel) return console.error("Couldn't find the channel.");
      Channel.send(`**${user}** call for ${to}!`).catch(e => console.log(e));
    }                                   
  }, 4000);
}