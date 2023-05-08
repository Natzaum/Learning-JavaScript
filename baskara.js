function baskara(A, B, C){
    let delta = Math.pow(B, 2) - 4 * A *  C;
    if(delta < 0 || A == 0){
    return `Impossivel calcular`;
    }
    else{
    let R1 = (- B + Math.sqrt(delta)) / (2 * A);
    let R2 = (- B - Math.sqrt(delta)) / (2 * A);
    return `${R1} \n${R2}`
    }
}

console.log(baskara(10,21.1,101))
