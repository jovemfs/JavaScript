let v1, v2, v3;

v1 = parseInt(prompt("Inserir um valor: "))
v2 = parseInt(prompt("Inserir um valor: "))
v3 = parseInt(prompt("Inserir um valor: "))

if (v1 > v2 & v1 > v3) {
    alert("O maior valor é " + v1)
} else if (v1 == v2 || v2 == v3 || v3 == v1) {
    alert("Valor invalido pois os numeros iguais.")
} else if (v1 < v2 & v2 > v3) {
    alert("O maior valor é " + v2)
} else {
    alert("O maior valor é " + v3)
}