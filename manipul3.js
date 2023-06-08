function click(){
    const lista = document.querySelector("#test");
    const li = lista.querySelector("li");

    const newol = document.createElement("ol");
    const newul = document.createElement("ul");

    //usando for para criar o item 5 vezes
    for(let i = 0; i < 5; i++){
        const newli = document.createElement("li");
        newli.innerHTML = "Item add";

        //dentro do newol adicionei o "newli" que esta acima
        newol.append(newli);
    }

    for(let j = 0; j < 5; j++){
        const newli2 = document.createElement("li");
        newli2.innerHTML = "Item add";
        newul.append(newli2);
    }

    //declarei para eles aparecerem no site
    lista.after(newol)
    newol.after(newul)
}

let botao = document.querySelector(".botao");
botao.addEventListener("click", click);