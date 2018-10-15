var User = require('../model/user');

module.exports = class DatabaseUser{

    constructor(){
        this.database = [];
        const gianniKey = process.env.gianniTelegramNumber;
        const antonioKey = process.env.andonioTelegramNumber;
        const valerioKey = process.env.valerioTelegramNumber;

        this.database.push(new User(1,'Gianni','Filannino', 'E','C','B',gianniKey));
        this.database.push(new User(2,'Antonio','Di Lallo', 'E', 'B', 'C',antonioKey));
        this.database.push(new User(3,'Valerio','Tanferna', 'O','C','B',valerioKey));
        //this.database.push(new User(4,'Francesco','Grande', 'O','B','C',));
    }

    getById(id){
        return this.database.filter(e => e.id === id)[0];
    }

    getByName(name){
        return this.database.filter(e => e.nome === name)[0];
    }

    getWeekEvenUser(){
        return this.database.filter(e => e.settimana === 'E' );
    }

    getWeekOddUser(){
        return this.database.filter(e => e.settimana === 'O');
    }
}