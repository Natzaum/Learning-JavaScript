function click(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log("Primeiro post: " + json[0].title);
    })
}

document.querySelector(".botao").addEventListener("click", click)