function released(e){
    //para saber se estao pressionados ou nao
    console.log("the pressed key: " + e.code);
    console.log("shift: " + e.shiftKey);
    console.log("alt: " + e.altKey);
    console.log("ctrl: " + e.ctrlKey);
    console.log("--");

}

const input = document.querySelector(".input")
input.addEventListener("keyup", released)