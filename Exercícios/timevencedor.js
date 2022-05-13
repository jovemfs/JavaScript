let t1, t2, g1, g2;

t1 = prompt("Informe o nome do time 1: ");
t2 = prompt("Informe o nome do time 2: ");

g1 = parseInt(prompt("Informe quantos gols o " + t1 + " fez: "));
g2 = parseInt(prompt("Informe quantos gols o " + t2 + " fez: "));

if (g1 > g2) {
    alert("O " + t1 + " ganhou do " + t2 + " de " + g1 + "-" + g2);
} else {
    alert("O " + t2 + " ganhou do " + t1 + " de " + g2 + "-" + g1);
}