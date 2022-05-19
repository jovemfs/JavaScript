let acumuladora, contadora;

contadora = 0;
acumuladora = 0;

while (contadora < 500) {

    if ((contadora % 2) == 0) {
        acumuladora = acumuladora + contadora;
    }

    contadora++
}

alert("Soma dos valores pares de 1-500: " + acumuladora);