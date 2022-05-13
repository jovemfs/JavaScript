let n1,n2,media;

n1=parseInt(prompt("Digite a nota da sua primeira prova: "));
n2=parseInt(prompt("Digite a nota da sua segunda prova: "));

media = (n1 + n2)/2

if (media>=6) {
    alert("Voce foi aprovado." + " Sua média foi de: " + media);
} else {
    alert("Voce foi reprovado." + " Sua média foi de: " + media);
}