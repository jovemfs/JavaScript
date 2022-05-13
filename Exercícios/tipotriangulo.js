let a, b, c, mens;

a = parseInt(prompt("Digite o valor do lado A do triângulo: "))
b = parseInt(prompt("Digite o valor do lado B do triângulo: "))
c = parseInt(prompt("Digite o valor do lado C do triângulo: "))

if (a < (b + c) && b < (a + c) && c < (a + b)) {
    if (a == b && b == c) {
        alert("Triângulo Equilátero.");
    } else if (a == b || b == c || a == c) {
        alert("Triângulo Isóceles.");
    } else {
        alert("Triângulo Esaleno.");
    }
} else {
    alert("Não é possivel formar um triângulo.");
}