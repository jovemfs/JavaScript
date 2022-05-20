let contadora, soma, resultado;
soma = 0;
contadora = 0;
while (contadora < 501) {
    if ((contadora % 2) == 0) {
        soma = soma + contadora
    }
    contadora++
    console.log(contadora + " e " + soma)
}

alert("Resultado da soma dos números pares de 1 a 500: " + soma);