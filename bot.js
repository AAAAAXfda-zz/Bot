function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(uuidv4());
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply(uuidv4());
  }
});

client.login(process.env.BOT_TOKEN);
