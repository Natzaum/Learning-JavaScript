const input = document.querySelector("input")
const ul = document.querySelector("#test")

function listname(e){
    if(e.key === "Enter"){
        const newli = document.createElement("li")
        newli.innerHTML = input.value

        ul.appendChild(newli)
        input.value = ""
    }
}

input.addEventListener("keyup", listname)