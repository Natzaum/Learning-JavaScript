function click(){
    const input = document.querySelector(".input");
    const botao = document.querySelector(".botao");

    //pegar o atributo
    console.log(input.getAttribute("name"));

    if(input.hasAttribute("placeholder")){
        //hasatribute para saber se tem "placeholder"
        console.log("tem placeholder");
    }
    else{
        console.log("nao tem placeholder");
    }

    //dizendo que o placeholder foi mudado
    input.setAttribute("placeholder", "placeholder changed");


    if(input.getAttribute("type") === "text"){
        //innerhtml pois é o texto dentro do botao
        botao.innerHTML = "mostrar senha";
        input.setAttribute("type", "password");
    }
    else{
        input.setAttribute("type", "text");
        botao.innerHTML = "ocultar senha";
    }
}   

const botao = document.querySelector(".botao");
botao.addEventListener("click", click);