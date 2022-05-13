let v1, v2, v3, soma;

v1 = parseInt(prompt("Insira um valor: "))
v2 = parseInt(prompt("Insira um valor: "))
v3 = parseInt(prompt("Insira um valor: "))

if (v1 == v2 || v2 == v3 || v1 == v3) {
    alert("Valores iguais")
} else if (v1 > v2 & v2 > v3) {
    soma = v1 + v2;
} else if (v1 > v2 & v2 < v3) {
    soma = v1 + v3;
} else if (v1 < v2 & v1 > v3) {
    soma = v2 + v1;
} else if (v1 < v2 & v1 < v3) {
    soma = v2 + v3;
} else if (v3 > v2 & v2 > v1) {
    soma = v3 + v2;
} else {
    soma = v3 + v1;
}

alert("Resultado" + soma)