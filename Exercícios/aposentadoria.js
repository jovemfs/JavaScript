let codigo, nascimento, ano_de_empresa, ano_aposentar, ano_empresa, ano_atual;

codigo = prompt("Informe o código do empregado: ")
nascimento = parseInt(prompt("Informe o ano de nascimento: "))
ano_de_empresa = parseInt(prompt("Informe o ano de entrada do empregado " + codigo))
ano_atual = parseInt(prompt("Digite o ano atual: "))

ano_aposentar = (ano_atual - nascimento);
ano_empresa = (ano_atual - ano_de_empresa);

if (ano_aposentar >= 65) {
    alert("O empregado " + codigo + " já pode dar entrada em sua aposentadoria. Razão: idade mínima.")

} else if (ano_de_empresa >= 30) {
    alert("O empregado " + codigo + " já pode dar entrada em sua aposentadoria. Razão: mínimo de 30 anos trabalhados.")

} else if (ano_aposentar >= 60 && ano_de_empresa >= 25) {
    alert("O empregado " + codigo + " já pode dar entrada em sua aposentadoria. Razão: idade de 60 anos ou mais e mínimo de 25 ano anos trabalhados.")

} else {
    alert("O empregado " + codigo + " não pode se aposentar.")
}