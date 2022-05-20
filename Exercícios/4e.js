let contadora, valor, soma;
contadora = 1;
soma = 0;

while ( contadora < 16 ) {
    valor = parseInt(prompt("Insira um valor: "));
    console.log(valor);
    soma = soma + valor;
    contadora++
}
alert("Soma total dos 15 números: " + soma);