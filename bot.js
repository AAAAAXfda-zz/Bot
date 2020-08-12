const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NzQyNDk5NDc1OTQ3NTIwMDUw.XzHAhg.VIQRQAIviAG_QL0f-3X-FA89jR4);
