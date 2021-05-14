const User = require('../models/User');

module.exports = {
    name: 'register',
    description: 'register user',
    execute(message, args){
        
        var user = new User({
            username: message.author.username,
            userid : message.author.id,
            discriminator: message.author.discriminator
        });

        user.save().then(() => {
            message.channel.send('User registered! ' + user.username);
        });
    }
}