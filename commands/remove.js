const User = require('../models/User');

module.exports = {
    name: 'remove',
    description: 'delete user',
    arguments: ['none'],
    execute(message, args){
        User.findOneAndDelete({userid: message.author.id}, function(existingUser, err){
            message.channel.send("User removed " + message.author.username);
        });
    }
}