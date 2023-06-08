function click(){
    const botao = document.querySelector("button");

    //alterar entre botao azul e verde
    if(botao.classList.contains("azul")){
        botao.classList.remove("azul");
        botao.classList.add("verde")
    }
    else{
        botao.classList.add("azul");
        botao.classList.remove("verde")
    }

    //metodo mais facil que o acima
    if(botao.classList.contains("verde")){
        botao.classList.replace("verde", "azul");
    }
    else{
        botao.classList.replace("azul", "verde");
    }
}

const botao = document.querySelector(".botao");
botao.addEventListener("click", click);