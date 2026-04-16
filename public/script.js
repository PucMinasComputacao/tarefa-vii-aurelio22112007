let nome = prompt("Digite seu nome:");

let renda = Number(prompt("Digite sua renda mensal:"));

while (isNaN(renda)) {
    alert("Digite um número válido!");
    renda = Number(prompt("Digite sua renda mensal:"));
}

let qtd = Number(prompt("Quantas despesas deseja informar? (1 a 5)"));

while (isNaN(qtd)) {
    alert("Digite um número válido!");
    qtd = Number(prompt("Quantas despesas deseja informar? (1 a 5)"));
}

if (qtd < 1) {
    qtd = 1;
} else if (qtd > 5) {
    qtd = 5;
}

let total = 0;

for (let i = 1; i <= qtd; i++) {

    let despesa = Number(prompt("Digite o valor da despesa " + i + ":"));

    while (isNaN(despesa)) {
        alert("Digite um número válido!");
        despesa = Number(prompt("Digite o valor da despesa " + i + ":"));
    }

    total = total + despesa;
}

let sobra = renda - total;
let mensagem = "";

if (total > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let resultado =
"Nome: " + nome + "\n" +
"Renda: R$ " + renda.toFixed(2) + "\n" +
"Despesas: R$ " + total.toFixed(2) + "\n" +
"Sobra: R$ " + sobra.toFixed(2) + "\n" +
"Situação: " + mensagem;

alert(resultado);
console.log(resultado);