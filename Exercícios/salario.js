let salario, reajuste, salario_reajustado;

salario=parseInt(prompt("Informe o seu salario: "))
reajuste=parseInt(prompt("Digite o percentual do seu reajuste salárial."))

salario_reajustado = (reajuste/100*salario) + salario;

alert("O seu salario reajustado é " + salario_reajustado + "R$.")