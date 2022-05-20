let valor, acumuladora, maior, menor;
maior = 1;
menor = 9999999999;
valor = 1;

console.log("Valores digitados: ")
while (valor > 0) {
    valor = parseInt(prompt("Insira um valor: "));

    if (valor > maior) {
        maior = valor;

    } else if (valor < menor) {
        menor = valor;
    } else { }

    console.log(valor);
}
alert("Maior valor digitado: " + maior + ". Menor valor digitado: " + menor);
console.log("Maior valor digitado: " + maior + ". Menor valor digitado: " + menor);