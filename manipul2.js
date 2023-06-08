function click(){
    //selecionar o que voce quer alterar
    const lista = document.querySelector("#test");
    const li = lista.querySelector("li")

    //criar um novo elemento para o que voce quis alterar
    const newli = document.createElement("li");
    newli.innerHTML += "adicionado"

    //append child para adicionar o elemento "li"
    //append = "fim" prepend = "começo" 
    li.appendChild(newli);
}

//codigo para selecionar o botao
let botao = document.querySelector(".botao");
botao.addEventListener("click", click);