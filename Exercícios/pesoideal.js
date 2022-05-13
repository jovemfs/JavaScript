let genero, altura;

genero=parseFloat(prompt("Informe seu genero, considerando que '1 = F' e '2 = M': "));
altura=parseFloat(prompt("Informe sua altura: "));

if (genero==1){
    alert("Seu peso ideal é: " + ((62.1*altura)-44.7) + "kgs")
}else if (genero==2){
    alert("Seu peso ideal é: " + ((72.1*altura)-58) + "kgs")
}else{
    alert("O numero informado é invalido.")
}