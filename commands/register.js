const User = require('../models/User');

module.exports = {
    name: 'register',
    description: 'register user',
    arguments: ['none'],
    execute(message, args){
        User.findOne({userid: message.author.id}, function(err, existingUser){
            if(existingUser == null){
                var user = new User({
                    username: message.author.username,
                    userid : message.author.id,
                    discriminator: message.author.discriminator
                });
                user.save().then(() => {
                    message.channel.send('User registered: ' + user.username);
                });
            } else{
                message.channel.send("User already registered, you don't need to do it twice lol");
            }
        });
    }
}