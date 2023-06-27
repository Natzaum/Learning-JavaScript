class person {
    //static se tranforma em um dado geral, nao se especifica a uma pessoa somente
    static hands = 2
    age = 0

    constructor(name){
        this.name = name
    }

    sayhi(){
        console.log(`eu sou o ${this.name} e tenho ${person.hands} hands`);
    }
}

let p1 = new person (`neigamer`)
//muda as hands da pessoa
person.hands = 3

p1.sayhi()