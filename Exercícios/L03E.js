let contadora, expoente, potencia;

alert("Verifique o resultado da potência de 3 usando o inspecionar.")

contadora = 1;
expoente = 0;
while (contadora < 17) {
    console.log("3 ^ " + expoente + " = " + Math.pow(3, expoente));
    contadora++
    expoente++
}