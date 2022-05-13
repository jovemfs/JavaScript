let v1, v2, v3;

v1 = parseInt(prompt("Insira um valor: "))
v2 = parseInt(prompt("Insira um valor: "))
v3 = parseInt(prompt("Insira um valor: "))

if (v1 == v2 || v2 == v3 || v3 == v1) {
    alert("Valores iguais.")
} else if (v1 > v2 & v2 > v3) {
    alert(v3 + " " + v2 + " " + v1)
} else if (v1 > v2 & v2 < v3) {
    alert(v2 + " " + v3 + " " + v1)
} else if (v1 < v2 & v1 > v3 & v2 > v3) {
    alert(v3 + " " + v1 + " " + v2)
} else if (v2 > v1 & v1 < v3 & v2 > v3) {
    alert(v1 + " " + v3 + " " + v2)
} else if (v3 > v2 & v2 < v1) {
    alert(v2 + " " + v1 + " " + v3)
} else {
    alert(v1 + " " + v2 + " " + v3)
}