let hora_inicial, hora_final, duracao;

hora_inicial=parseInt(prompt("Digite o horario de inicio da partida: "))
hora_final=parseInt(prompt("Digite o horario de termino da partida: "))
duracao=hora_final-hora_inicial;

if (duracao>24 || duracao<=0){
    alert("Duração maior que 24 horas.")
}else{
    alert("Sua partida durou: " + duracao + " horas.")
}