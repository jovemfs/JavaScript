let contadora, resultado, multiplicacao;

contadora = parseInt(prompt("Digite um número inteiro: "))
alert("Confira o resultado no console.log.")
multiplicacao = 1;

while (multiplicacao < 11) {
    resultado = contadora * multiplicacao;
    console.log(contadora + " x " + multiplicacao + " = " + resultado);
    multiplicacao = multiplicacao + 1;
}