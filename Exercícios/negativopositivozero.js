let valor;

valor = parseInt(prompt("Digite um valor: "));

if (valor < 0) {
    alert("Negativo");
} else if (valor == 0) {
    alert("Neutro");
} else {
    alert("Positivo");
}