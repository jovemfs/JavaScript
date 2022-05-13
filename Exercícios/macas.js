let quantidade_macas;

quantidade_macas = parseInt(prompt("Digite quantas maçãs você pretende comprar: "));

if (quantidade_macas<12){
    alert("A compra vai custar "+(1.30*quantidade_macas)+"R$")
} else{
    alert("A compra vai custar "+quantidade_macas+"R$")
}