let atual, maxima, minima, produto, media;

produto = prompt("Informe o nome do produto: ");
atual = parseFloat(prompt("Informe a quantidade atual de " + produto + ": "));
minima = parseFloat(prompt("Informe a quantidade minima para armazenar o " + produto + "em seu estoque: "));
maxima = parseInt(prompt("Informe a quantidade maxima para armazenar o " + produto + "em seu estoque: "));
media = (maxima + minima) / 2;

if (atual < media) {
    alert("Efetuar a conta de " + produto)
} else {
    alert("Não efetuar a compra de " + produto)
}