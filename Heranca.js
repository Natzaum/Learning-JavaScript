class person {
    age = 0
    CPF = 0
    genero = ``
    birthday = ``

    constructor (name){
        this.name = name
    }

    sayhi(){
        console.log(`${this.name} diz ola`);
    }
}

//a class estudent herda todas as coisas adicionadas na class person
class stundent extends person{
    constructor (name, ID){

        //super se refere a person, se for "this", vai se referir a propria class student
        super(name)
        this.ID = ID
    }

    //executa a funcao que esta dentro da class person
    sayhello(){
        super.sayhi()
    }
}

let p1 = new stundent("Nei Gamer", 1)
p1.age = 19
p1.CPF = 10
p1.genero = `M`
p1.birthday = `10/02/2005`

console.log(`O aluno ${p1.name} tem ${p1.age} anos, seu CPF é ${p1.CPF} e ele nasceu em ${p1.birthday} e seu ID de aluno é ${p1.ID}`);
p1.sayhi()