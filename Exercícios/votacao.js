let idade;

idade=parseInt(prompt("Por favor, informe sua idade: "))

if(idade<16){
    alert("Por ser menor de 16 anos, você não pode votar.")
}else if(idade<18){
    alert("Por ser menor de 18 anos, o voto é opcional.")
}else{
    alert("Com essa idade o voto é obrigatório.")
}