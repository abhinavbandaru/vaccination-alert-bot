const Discord = require('discord.js');
const client  = new Discord.Client();

const botToken = require('../VaccinationAlertBot/config/botToken.json')

const prefix = '!'

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/');

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const connectDB = require('./config/db');
connectDB();

client.once('ready', () =>{
    console.log('Vaccine-Alert Bot Online')
});

client.on('message', message => {
    if(!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command  = args.shift().toLocaleLowerCase();
    if(command === 'register'){
        client.commands.get('register').execute(message, args);
    } else if(command === 'help') {
        client.commands.get('help').execute(message, client.commands);
    } else if(command === 'remove'){
        client.commands.get('remove').execute(message, args);
    } else if(command === 'activate'){
        client.commands.get('activate').execute(message, args);
    } else if(command === 'deactivate'){
        client.commands.get('deactivate').execute(message, args);
    } else {
        client.commands.get('default').execute(message, args);
    }
});

client.login(botToken.token);