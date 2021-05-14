module.exports = {
    name: 'help',
    description: 'use this command to list all available commands',
    arguments: ['none'],
    execute(message, commands){
        var msg = "Here are the commands I can follow: \n";
        for(const command of commands){
            if(command[1].name !== 'default' && command[1].name !== 'help'){
                msg = msg + "!" + command[1].name + " : " + command[1].description + " Arguments: " + command[1].arguments + "\n";
            }
        }
        message.channel.send(msg);
    }
}