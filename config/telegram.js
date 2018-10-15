var telegramBot = require('node-telegram-bot-api');

module.exports = class TelegramManager{

    constructor(){
        var token = process.env.telegramAPI;
        this.bot = new telegramBot(token, {'webHook.port' : process.env.PORT || 8443});
        
    }

    sendMessage(user, message){
        if(user && null != user){
            this.bot.sendMessage(user.telegramId, message).catch(error => console.error(error));
        }
    }
}
