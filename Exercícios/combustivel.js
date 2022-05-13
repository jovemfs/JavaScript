let combustivel, litros, valor_final;

combustivel = prompt("Você irá reabastecer com álcool ou gasolina? ")
litros = parseFloat(prompt("Quantos litros você irá reabastecer em seu veículo? "))

if (combustivel == 'álcool' & litros <= 20) {
    valor_final = (2.90 - (3 / 100 * 2.90)) * litros;
    alert("Total a pagar: R$" + valor_final + " no álcool")
} else if (combustivel == 'álcool' & litros > 20) {
    valor_final = (2.90 - (5 / 100 * 2.90)) * litros;
    alert("Total a pagar: R$" + valor_final + " no álcool")
} else if (combustivel == 'gasolina' & litros <= 20) {
    valor_final = (3.30 - (4 / 100 * 3.30)) * litros;
    alert("Total a pagar: R$" + valor_final + " na gasolina")
} else if (combustivel == 'gasolina' & litros > 20) {
    valor_final = (3.30 - (6 / 100 * 3.30)) * litros;
    alert("Total a pagar: R$" + valor_final + " na gasolina")
} else {
    alert("Valor inválido.")
}