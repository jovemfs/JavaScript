let hora_mes, salario_hora, salario;

hora_mes=parseInt(prompt("Informe a quantidade de horas trabalhada em 1 mes: "));
salario_hora=parseInt(prompt("Informe o salario por hora trabalhada: "));

if (hora_mes <= 160){
    alert("O salario vai ser de: " + (hora_mes*salario_hora) + "R$.")
} else{
    salario = (hora_mes*salario_hora)+hora_mes-160*(50/100*salario_hora)
    alert("O salario vai ser de: " + salario + "R$.")
}