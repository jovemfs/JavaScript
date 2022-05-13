let saldo, debito, credito, saldoatual;

saldo=parseFloat(prompt("Informe o seu ultimo saldo: "));
debito=parseFloat(prompt("Informe o seu valor em debito: "));
credito=parseFloat(prompt("Informe o seu valor em credito: "));

saldoatual = saldo-debito+credito;

if (saldo<=0){
    alert("Saldo negativo. Extrato: " +saldoatual+"R$");
}else{
    alert("Saldo positivo. Extrato: " +saldoatual+"R$");
}