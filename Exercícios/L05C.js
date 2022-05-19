let contadora, acumuladora;
contadora = 0;
acumuladora = 0;
while (contadora < 101) {
    acumuladora = contadora + acumuladora;
    contadora++
}
alert("Soma dos primeiros 100 números: " + acumuladora);