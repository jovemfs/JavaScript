let contadora, divisivel;

contadora = 1;
while (contadora < 201) {
    if ((contadora % 4) == 0) {
        divisivel = contadora / 4;
        console.log(contadora + "/4 = " + divisivel);
    }
    contadora++
}
alert("Veja os número dívisiveis por 4 de 1 a 200 em inspecionar.");