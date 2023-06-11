class Person {
    _age = 10
    power = 20
    health = 30

    constructor (name, lastname){
        this.name = name
        this.lastname = lastname
    }

    takePower(){
        this.power += 10
    }

    //colocar o nome completo em 1 só variavel
    get fullname(){
        return `${this.name} ${this.lastname}`
    }

    //para usar o age e nao o _age
    get age(){
        return this._age
    }

    //deixa o age sempre em numero e coloca ele para executar no X
    set age(X){
        if(typeof X == "number"){
            this._age = X
        }
    }
}

let p1 = new Person ("NeiGamer", "GOD")
let p2 = new Person ("Monstrengo", "NURSE")

p1.takePower()

console.log(`${p1.fullname} tem ${p1.age} anos, ${p1.power} de poder e ${p1.health} de vida`);
console.log(`${p2.fullname} tem ${p2.age} anos, ${p2.power} de poder e ${p2.health} de vida`);
