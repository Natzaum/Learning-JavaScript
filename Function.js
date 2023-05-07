function maiordeidade(idade){
    if(idade >= 18){
        console.log(`Voce tem ${idade} anos e é maior de idade`);
    }
    else{
        console.log(`Voce nao é maior de idade`);
    }
    return `${idade}`
}

let idade = maiordeidade(18);
