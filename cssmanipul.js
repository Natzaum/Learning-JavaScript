function click(){
    const ul = document.querySelector("#test");
    
    //trocar style da lista
    ul.style.backgroundColor = "#00F";
}

const botao = document.querySelector(".botao");
botao.addEventListener("click", click);