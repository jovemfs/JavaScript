let v1,v2;

v1=parseInt(prompt("Digite um valor inteiro: "));
v2=parseInt(prompt("Digite outro valor inteiro: "));

if (v1 > v2){
    alert(v1 + " é maior que " + v2);
}else if (v1 < v2){
    alert(v2 + " é maior que " + v1);  
}else{
    alert("Os valores são iguais.");
}