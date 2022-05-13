let usuario = 4002;
let senha = 8922;
let nome, acesso1, acesso2;

nome = prompt("Digite seu nome: ")
acesso1 = parseInt(prompt("Digite seu usuário: "))

if (acesso1 == 4002) {
    acesso2 = parseInt(prompt("Digite sua senha: "))

    if (acesso2 == 8922) {
        alert("Acesso permitido. Seje bem-vindo, " + nome)
    } else {
        alert("Acesso negado. Senha inválida.")
    }
} else {
    alert("Acesso negado. ID de usuário incorreto.")
}
