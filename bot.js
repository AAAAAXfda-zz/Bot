const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
