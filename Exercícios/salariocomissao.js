let salario_fixo, valor_carro_vendido, valor_vendas, numero_carros_vendidos, salario_final;

salario_fixo=parseFloat(prompt("Digite seu salario fixo: "));
valor_carro_vendido=parseFloat(prompt("Digite o valor por carro vendido: "));
numero_carros_vendidos=parseFloat(prompt("Digite a quantidade de carros vendidos: "));
valor_vendas=parseFloat(prompt("Digite o valor das vendas: "));

salario_final= (valor_carro_vendido*numero_carros_vendidos) + (5/100*valor_vendas) + salario_fixo;

alert("O salário final é de: " + salario_final + "R$")