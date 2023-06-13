class Veiculo {
    constructor(marca, modelo, ano) {
      this.marca = marca
      this.modelo = modelo
      this.ano = ano
    }
  
    obterDetalhes() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
    }
  }
  
  class Carro extends Veiculo {
    constructor(marca, modelo, ano, combustivel) {
      super(marca, modelo, ano)
      this.combustivel = combustivel
    }
  
    obterDetalhes() {
      return `${super.obterDetalhes()}, Combustível: ${this.combustivel}`
    }
  }
  
  const carro1 = new Carro("Ford", "Focus", 2020, "Gasolina")
  console.log(carro1.obterDetalhes())
