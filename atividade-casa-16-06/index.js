// Usuária clicou no botão “Comprar agora”

// Você trabalha no time de produto de um app de compras. Quando a usuária clica no botão "Comprar agora", o sistema precisa verificar se:
// - A usuária está logada no app;
// - O carrinho não está vazio.

// Regras:
// Se a usuária estiver logada e o carrinho tiver itens, exiba: "Pedido em andamento!"
// Se a usuária não estiver logada, exiba: "Faça login para continuar."
// Se a usuária estiver logada, mas o carrinho estiver vazio, exiba: "Seu carrinho está vazio."

let usuariaLogada = false; // Simula se a usuária está logada
let carrinhoTemItens = true; // Simula se o carrinho está vazio

if (usuariaLogada && carrinhoTemItens) {
    console.log(`Pedido em andamento!`)
} else if (!usuariaLogada) {
    console.log(`Faça login para continuar!`)
} else {
    console.log(`Seu carrinho está vazio.`)
}