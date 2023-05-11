function clicou(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul")

    let newli = document.createElement("strong")

    newli.innerText = "item adicionado"
     
    ul.appendChild(newli)
}