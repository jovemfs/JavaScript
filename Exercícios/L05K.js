let contadora, acumuladora, valor;
contadora = 0;
acumuladora = 0;
valor = 0;

while (contadora < 10) {

    if ((contadora % 2) != 0) {
        valor = contadora;

        while (valor > 0) {
            acumuladora = valor + acumuladora;
            valor = valor - 1;
        }

        console.log(contadora + "! = " + acumuladora);
        valor = 0;
        acumuladora = 0;
    }


    contadora = contadora + 1;
}

alert("Veja os valores fatorados de 1-10 em inspecionar.");