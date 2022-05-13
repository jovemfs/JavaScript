let nome_comodo, largura, comprimento, calculo_total, calculo_comodo,resposta;

calculo_total = 1;
resposta = "sim"

while (resposta == "sim"){

    nome_comodo = prompt("Cômodo: ");

    largura = parseFloat(prompt("Largura em metros do(a) "+nome_comodo+": "));

    comprimento = parseFloat(prompt("Digite a comprimento em metros do/a "+nome_comodo+": "));

    calculo_comodo = largura*comprimento;
    console.log("O cômodo "+nome_comodo+" tem o total de "+calculo_comodo+"m².");

    calculo_total = calculo_comodo*calculo_total;

    resposta = prompt("Quer adicionar um cômodo? [Sim ou não]: ");
}

alert("Área total dos cômodos: "+calculo_total+"m²");