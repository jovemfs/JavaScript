let contadora, acumuladora, soma;

contadora = 0;
while (contadora < 15) {
    acumuladora = contadora - 1;
    soma = acumuladora + contadora;
    console.log(acumuladora + " + " + contadora + " = " + soma);
    contadora++
}

alert("Abra o inspecionar para ver a sequência de Fibonacci.");