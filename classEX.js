class person{
    constructor(name, age, profission){
        this.name = name
        this.age = age
        this.profission = profission
    }

    apresent(){
        console.log(`Ola, meu nome é ${this.name}, tenho ${this.age} anos e sou ${this.profission}`);
    }
}

let p1 = new person(`neigamer`, 19, `caçador de lendas`)
let p2 = new person(`Joao`, 20, `lacaio do neigamer`)

p1.apresent()
p2.apresent()