var User = require('../model/user');

module.exports = class DatabaseUser{

    constructor(){
        this.database = [];
        this.database.push(new User(1,'Gianni','Filannino', 'E','C','B',156340013));
        this.database.push(new User(2,'Antonio','Di Lallo', 'E', 'B', 'C',432883825));
        this.database.push(new User(3,'Valerio','Tanferna', 'O','C','B',213316483));
        this.database.push(new User(4,'Francesco','Grande', 'O','B','C',434127723));
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