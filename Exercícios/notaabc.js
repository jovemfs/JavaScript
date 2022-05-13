let nota1, nota2, nota3, media, media_de_aproveitamento;

nota1 = parseInt(prompt("Insira o valor (0 - 10) da nota obtida na atividade: "))
nota2 = parseInt(prompt("Insira o valor (0 - 10) da nota obtida na atividade: "))
nota3 = parseInt(prompt("Insira o valor (0 - 10) da nota obtida na atividade: "))

media = (nota1 + nota2 + nota3) / 3;

media_de_aproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + media) / 7;

if (media_de_aproveitamento >= 9.0) {
    alert("Nota obtida: A.")

} else if (media_de_aproveitamento < 9.0 && media_de_aproveitamento >= 7.5) {
    alert("Nota obtida: B.")

} else if (media_de_aproveitamento < 7.5 && media_de_aproveitamento >= 6.0) {
    alert("Nota obtida: C.")

} else {
    alert("Nota obtida: D.")
}