var moment = require('moment');
var TelegramManager = require('./config/telegram');
var messages = require('./messeges/message');
var DatabaseUser = require('./config/db');
var schedule = require('node-schedule');

class App{

    constructor(){
        this.database = new DatabaseUser();
        this.bot = new TelegramManager();
    }

    checkTurn(){
        const week = parseInt(moment().format('w'));
        const dayOfMonth = parseInt(moment().format('dd'));
        const dayOfWeek = parseInt(moment().format('d'));

        if(6 == dayOfWeek || 0 == dayOfWeek){
            let users = [];
            if(week % 2 == 0){
                users = this.database.getWeekEvenUser();
            } else {
                users = this.database.getWeekOddUser();
            }
                users.forEach(u => {
                    if(dayOfMonth % 2 == 0){
                        if(u.giorniPari == 'C'){
                            this.bot.sendMessage(u,messages.dayMessage.cucina);
                        } else {
                            this.bot.sendMessage(u, messages.dayMessage.bagno);
                        }
                    }  else {
                        if(u.giorniDispari == 'C'){
                            this.bot.sendMessage(u, messages.dayMessage.cucina);
                        } else {
                            this.bot.sendMessage(u, messages.dayMessage.bagno);
                        }
                    }
                });

            }
        
    }

    sendMessageTest(){
        this.bot.sendMessage(this.database.getByName('Gianni'), 'TEEEEST!');
    }

}

const app = new App();
const rule = new schedule.RecurrenceRule();
rule.hour = 7;
rule.minute = 0;

const ruleTest = new schedule.RecurrenceRule();
ruleTest.minute = 10;

schedule.scheduleJob(ruleTest, () => {
    app.checkTurn();
});

schedule.scheduleJob(ruleTest, () => {
    app.sendMessageTest();
});