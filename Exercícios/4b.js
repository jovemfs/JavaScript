let contadora, soma;
contadora = 1;
soma = 0;
while (contadora < 151) {
    if ((contadora % 2) == 0) {
        console.log(contadora);
        soma = soma + contadora;
    }
    contadora++
}

alert("Soma dos valores pares de 1 a 150: " + soma);