let valido,branco,nulo,total_de_votos;

valido=parseFloat(prompt("Digite o total de votos validos: "));
branco=parseFloat(prompt("Digite o total de votos em branco: "));
nulo=parseFloat(prompt("Digite o total de votos nulos: "));

total_de_votos =nulo+valido+branco;

alert("A quantidade de votos foi de " + total_de_votos +" sendo " + ((valido*100)/total_de_votos) + "% votos validos, " + ((branco*100)/total_de_votos) + "% votos brancos e " + ((nulo*100)/total_de_votos) + "% votos nulos")