const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');}
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
      
    }
});

client.login(process.env.NDcxMTI0NzQ0ODg4OTA5ODI1.Dzo1jg._biw_ARXTCXPOqG2fAuMxraJwjI);
