module.exports = {
    name: 'default',
    description: 'default response',
    execute(message, args){
        message.channel.send('Thats not a valid command, please check help by typing "!help" to get the list of valid commands');
    }
}