const Discord = require('discord.js');
const client = new Discord.Client();

const command = args.shift().toLocaleLowerCase();
if (command === '8') {
  const testEmbed = new Discord.RichEmbed()
    .setColor(34a8eb)
    .setTitle('Rules')
    .setDescription('Rules for Jessology Clothing')
  }
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
