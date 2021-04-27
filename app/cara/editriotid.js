const sendError = require("../util/error.js")
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  
  const embed = new MessageEmbed()
  .setTitle('Cara mengganti Riot ID')
  .setColor('GREEN')
  .setDescription(`
  1. Buka dan login akun Riot Games kalian pada [link ini](https://auth.riotgames.com/login#scope=openid%20email%20profile%20riot%3A%2F%2Friot.atlas%2Faccounts.edit%20riot%3A%2F%2Friot.atlas%2Faccounts%2Fpassword.edit%20riot%3A%2F%2Friot.atlas%2Faccounts%2Femail.edit%20riot%3A%2F%2Friot.atlas%2Faccounts.auth%20riot%3A%2F%2Fthird_party.revoke%20riot%3A%2F%2Fthird_party.query%20riot%3A%2F%2Fforgetme%2Fnotify.write%20riot%3A%2F%2Friot.authenticator%2Fauth.code&state=d32890f4-1c42-4dd5-9e99-d47f5f295fb6&acr_values=urn%3Ariot%3Agold&ui_locales=en&client_id=accountodactyl-prod&redirect_uri=https%3A%2F%2Faccount.riotgames.com%2Foauth2%2Flog-in&response_type=code)
  2. Setelah login, akan terlihat Riot ID kalian dan kalian dapat mengubahnya (30 hari cooldown untuk setiap perubahan Riot ID)
  `)
  .setImage('https://logodownload.org/wp-content/uploads/2019/12/riot-games-logo.png')
  .setFooter('Powered by Bijihow')
  
  message.channel.send(embed)
}