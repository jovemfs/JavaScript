let valor,valor_de_fabrica;

valor=parseFloat(prompt("Digite o valor de fabrica do automovel: "));
valor_de_fabrica= valor + (28/100*valor) + (45/100*valor);

alert("com o calculo de impostos, o valor final do automovel fica por: " + valor_de_fabrica)