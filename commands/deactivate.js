const User = require('../models/User');

module.exports = {
    name: 'deactivate',
    description: 'deactivate user',
    arguments: [],
    execute(message, args){
        User.findOneAndUpdate({userid: message.author.id}, {alerts: false}, function(err, existingUser){
            if(existingUser != null){
                message.channel.send('User dectivated: ' + existingUser.username);
            } else{
                message.channel.send("User not registered, please register first using the !register command");
            }
        });
    }
}