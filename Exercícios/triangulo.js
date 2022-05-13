let v1, v2, v3;

v1 = parseInt(prompt("Digite o valor A: "))
v2 = parseInt(prompt("Digite o valor B: "))
v3 = parseInt(prompt("Digite o valor C: "))

if (v1 <= v2 + v3 & v2 <= v3 + v1 & v3 <= v1 + v2) {
    alert("Forma um triângulo.")
} else {
    alert("Não forma um triângulo")
}