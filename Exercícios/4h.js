let comodo, largura, comprimento, total, totalcomodo, resposta;

total = 1;
resposta = "sim"

while (resposta == "sim") {

    comodo = prompt("Informe o nome do cômodo: ");

    largura = parseFloat(prompt("Informe a largura em metros do(a) " + comodo + ": "));

    comprimento = parseFloat(prompt("Informe a comprimento em metros do(a) " + comodo + ": "));

    totalcomodo = largura * comprimento;
    console.log("O cômodo " + comodo + " tem " + totalcomodo + "m².");

    total = totalcomodo * total;

    resposta = prompt("Quer adicionar um cômodo? [sim/não]:  ");
}

alert("A área total  é de " + total + "m².");