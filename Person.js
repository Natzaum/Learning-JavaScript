//criando uma classe pessoa
class Person {
    //adicionando atributos para eles
    constructor (name, age, power, health){
        //this significa o que ele tem
        this.name = name
        this.age = age
        this.power = power
        this.health = health
    }
}

//criando a variavel de 2 pessoas
let p1 = new Person ("NeiGamer", 19, 100, 100)
let p2 = new Person ("Monstrengo", 13, 20, 30)

//mostrando o nome idade poder e vida da pessoa
console.log(`${p1.name} tem ${p1.age} anos, ${p1.power} de poder e ${p1.health} de vida`);
console.log(`${p2.name} tem ${p2.age} anos, ${p2.power} de poder e ${p2.health} de vida`);
