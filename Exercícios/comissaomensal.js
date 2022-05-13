let salariofixo, salariovendas, salariofinal;

salariofixo=parseFloat(prompt("Informe seu salário fixo: "));
salariovendas=parseFloat(prompt("Informe seu valor de vendas: "));

if (salariovendas <= 1500){
    salariofinal = (3/100*salariovendas)+salariofixo;
    alert("Seu salário somado a comissão desse mês é de: " + salariofinal + "R$");
}else{
    salariofinal = (5/100*salariovendas)+salariofixo;
    alert("Seu salário somado a comissão desse mês é de: " + salariofinal + "R$");
}