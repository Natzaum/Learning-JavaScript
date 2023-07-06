class Person {
    age = 10
    power = 20
    health = 30

    constructor (name){
        
        this.name = name
    }

    //adicionando um adicionador de poder
    takePower(){
        this.power += 10
    }

    //adicionando uma idade
    setAge(newage){
        if(typeof newage == "number"){
            this.age = newage
        }
        else{
            console.log("Somente numeros");
        }
    }
}

let p1 = new Person ("NeiGamer")
let p2 = new Person ("Monstrengo")

//dizendo a idade e o poder
p1.setAge(20)
p1.takePower()

console.log(`${p1.name} tem ${p1.age} anos, ${p1.power} de poder e ${p1.health} de vida`);
console.log(`${p2.name} tem ${p2.age} anos, ${p2.power} de poder e ${p2.health} de vida`);

