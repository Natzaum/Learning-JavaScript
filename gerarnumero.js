function numeroaleatorio(){

    let numeroale = Math.floor(Math.random() * 100)

    document.querySelector("li").innerHTML = "seu numero aleatorio: " + numeroale;
}

function click(){
    numeroaleatorio();
}

let botao = document.querySelector(".botao")
botao.addEventListener("click", click)