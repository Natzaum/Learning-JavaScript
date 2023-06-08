function click(){
    const imagem = document.querySelector("div");
    imagem.innerHTML = `<img src= "https://i.pinimg.com/564x/77/34/a2/7734a23fc8985d1bdc20d482bcb4e4e7.jpg" width = "300px" height = "300px" />`

}
let botao = document.querySelector(".botao");
botao.addEventListener("click", click);
