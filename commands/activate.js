const User = require('../models/User');

module.exports = {
    name: 'activate',
    description: 'activate user and set state and district name',
    arguments: ['DistrictNumber'],
    execute(message, args){
        if(args.length!=1){
            message.channel.send('The number of arguments entered is not correct\nThe arguments are: '+ this.arguments+ '\n' + 'Please check and try again');
            return;
        }
        User.findOneAndUpdate({userid: message.author.id}, {alerts: true, districtNo: args[0]}, function(err, existingUser){
            if(existingUser != null){
                message.channel.send('User Activated: ' + existingUser.username);
            } else{
                message.channel.send("User not registered, please register first using the !register command");
            }
        });
    }
}