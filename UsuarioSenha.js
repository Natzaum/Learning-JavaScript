function validar(usuario, senha){
    if(usuario == "natzaum" && senha === 123){
    return true;
    }
    else{
        return false;
    }
}

let usuario = "natzaum";
let senha = 123;
let validacao = validar(usuario, senha);
if(validacao){
    console.log("Acesso concedido");
}
else{
    console.log("Acesso negado");
}