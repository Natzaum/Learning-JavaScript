const ul = document.querySelector("ul")
const input = document.querySelector("input")


function handleKeyUp(e){
    if(e.key === "Enter"){
        const newli = document.createElement("li")
        newli.innerHTML = input.value

        ul.appendChild(newli)
        input.value = ""
    }
}

input.addEventListener("keyup", handleKeyUp)

function click(){
    if(botao){
        const newli = document.createElement("li")
        newli.innerHTML = input.value

        ul.appendChild(newli)
        input.value = ""
    }
}

let botao = document.querySelector(".botao")
botao.addEventListener("click", click)