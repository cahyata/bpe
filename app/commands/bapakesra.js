exports.run = async(client, message, args) => {

  message.channel.send('⌛Mencari bapaknya Esra di alam semesta...').then (async (msg) =>{
    msg.delete({ timeout : 5000})
    
    setTimeout(function(){ 
      message.channel.send(`Tidak ditemukan.`);
    }, 5000);
    
  })
  
}