let valor, menor, maior;
menor = 999;
maior = 1;

do {
    valor = parseInt(prompt("Insira um valor: "));
    console.log(valor);

    if (valor > maior) {
        maior = valor;
    }

} while (valor > 0) {
    if (valor < menor) {
        menor = valor;
    }
}

alert("Maior valor: " + maior + ". Menor valor: " + menor);