function media(n1, n2, n3, n4){
    let media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;
    console.log("Media: " + media);
    if(media >= 7){
        console.log("Aluno aprovado");
    }
    else if(media < 5){
        console.log("Aluno reprovado")
    }
    else if(media >= 5 && media <= 6.9){
        console.log("Aluno em exame")
        let exame = 6.4;
        console.log("Nota do exame: " + exame);
        let vfinal = (media + exame) / 2;
        if(vfinal >= 5.0){
            console.log("Aluno aprovado");
            console.log("Media final: " + vfinal);
        }
        else if(vfinal <= 4.9){
            console.log("Aluno reprovado");
            console.log("Media final: " + vfinal);
        }
    }
}

media(2, 6.5, 4, 5)