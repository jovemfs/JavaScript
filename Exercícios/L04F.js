let contadora, nota, soma, media;

contadora = -1;
nota = 1;
soma = 0;
media = 0;

while ( nota > 0 ) {
    nota = parseFloat(prompt("Insira um valor: "));
    console.log(nota);
    contadora++
    if (nota > 0) {
        soma = soma + nota;
    }
}

media = soma / contadora;
alert("A média é de: " + media + ". Você digitou " + contadora + " notas.");