let ano_nascimento, ano_atual, idade;

ano_atual=parseInt(prompt("Informe o ano em que estamos: "));
ano_nascimento=parseInt(prompt("Informe o ano de seu nascimento: "));

idade = ano_atual - ano_nascimento;

if (idade<16) {
    alert("Voce ainda nao pode votar.");
} else if (idade > 16 & idade < 18) {
    alert("Voce pode votar se quiser, mas nao é obrigatorio.");
}else{
    alert("Voce tem a obrigacao legal de votar.");
}