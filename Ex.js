let carros = ["BMW", "ferrari", "mercedes"];
let x = 1
console.log("1. " + carros[x]);

carros[1] = "audi";
console.log("2. lista com audi: ");
console.log(carros);

carros.push("volvo");
console.log("3. lista com volvo: ");
console.log(carros);

console.log("4. itens no array: " + carros.length);