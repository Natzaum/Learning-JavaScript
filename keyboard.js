function squeezed(){
    console.log("squeezed!");
}

function held(){
    console.log("held!");
}

function released(){
    console.log("released!");
}

//keyup, keydown, keypress para determinadas ações
document.addEventListener("keyup", released)