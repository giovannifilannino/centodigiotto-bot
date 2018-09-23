var telegramBot = require('node-telegram-bot-api');

module.exports = class TelegramManager{

    constructor(){
        var token = '676418428:AAFvlg-sQHkdFId4Xs--hsR-4LMGAiLPbII';
        this.bot = new telegramBot(token, {'webHook.port' : process.env.PORT || 8443});
        
    }

    sendMessage(user, message){
        if(user && null != user){
            this.bot.sendMessage(user.telegramId, message).catch(error => console.error(error));
        }
    }
}
