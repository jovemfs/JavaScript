var contadora = 0;
let celsius, fahrenheit;
celsius = 10;
while (celsius < 110) {
    fahrenheit = (9 * celsius + 160) / 5;
    console.log("Temperatura em Celsius: " + celsius + "°C" + ". Temperatura em Fahrenheit: " + fahrenheit + "°F");
    celsius = celsius + 10;
}
alert("Confira o valor da temperatura em inspecionar.");