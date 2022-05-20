function exer44() {
    let soma = null;
    let grao = 1;

    for (let quad = 1; quad < 64; quad++) {
        grao *= 2
        soma += grao
    }

    alert(`Resultado da soma dos grãos de trigo: ${soma}`);
}

let ret = exer44(1)