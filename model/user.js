module.exports = class User{
    constructor(id,nome,cognome,settimana,giorniPari,giorniDispari,telegramId){
        this.id = id;
        this.nome= nome;
        this.cognome = cognome;
        this.settimana = settimana;
        this.giorniPari = giorniPari;
        this.giorniDispari = giorniDispari;
        this.telegramId = telegramId;
    }
}