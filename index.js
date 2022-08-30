const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["allIntents"] });
const Monitor = require('ping-monitor');
const keepAlive = require('./server');
const config = require("./config.json")

keepAlive();
const monitor = new Monitor({
  website: 'https://OfficialBotNSKSKDKDK.vitrolkoyoma.repl.co',
  title: 'Secundario',
  interval: 15 // minutes
});

monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`));
monitor.on('error', (error) => console.log(error));

client.on('ready', () => {
  console.log(`Ready in  ${client.user.tag}!`); 

  client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: '',
            type: ""
        }
    });
});

client.on("message", message => {
  if(message.content === ".test") {
    message.channel.send("Toy Joya")
  }
})




client.login('MTAxMzk0MjQ3NzEwMDY5OTY1OA.G74qMQ.igjFCj2bU2b_5mGj0-HWGkxiU626P4xCEMKkUQ');