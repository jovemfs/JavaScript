let valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10, soma, media;

valor1 = parseFloat(prompt("Digite o primeiro valor: "));
valor2 = parseFloat(prompt("Digite o segundo valor: "));
valor3 = parseFloat(prompt("Digite o terceiro valor: "));
valor4 = parseFloat(prompt("Digite o quarto valor: "));
valor5 = parseFloat(prompt("Digite o quinto valor: "));
valor6 = parseFloat(prompt("Digite o sexto valor: "));
valor7 = parseFloat(prompt("Digite o sétimo valor: "));
valor8 = parseFloat(prompt("Digite o oitavo valor: "));
valor9 = parseInt(prompt("Digite o nono valor: "));
valor10 = parseFloat(prompt("Digite o décimo valor: "));

soma = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10;
media = soma / 10;

alert("Total somado: " + soma + ". Média: " + media);