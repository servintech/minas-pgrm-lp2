// 1. Frete grátis 
function calculaFrete() {
  const total = Number(document.getElementById('totalInput').value);
  let mensagem;

  // Se o total for maior ou igual a 150, a mensagem deve ser 'Frete grátis! 🎉'
  // Se o total for maior ou igual a 0 (mas menor que 150), a mensagem deve ser 'Frete: R$ 20.00 😅'
  // Se o valor for negativo ou inválido, a mensagem deve ser 'Valor inválido.'

  document.getElementById('shippingResult').textContent = mensagem;
}

// 2. Boas-vindas
function mensagemDeBoasVindas() {
  const tipo = document.getElementById('userInput').value;
  let mensagem;

  // Usar switch case para definir a mensagem com base no tipo:
  // - 'guest': "Oi, visitante! Crie uma conta pra ganhar descontos."
  // - 'registered': "Bem-vinda de volta!"
  // - 'premium': "Olá, cliente premium! Frete grátis garantido."
  // - 'admin': "Admin logado. Painel disponível."
  // Qualquer outro valor: "Tipo desconhecido."

  document.getElementById('userResult').textContent = mensagem;
}

// 3. Pode finalizar a compra?
function podeFazerCheckout() {
  const items   = document.getElementById('hasItems').checked;
  const pagamento = document.getElementById('paymentOk').checked;
  let mensagem;

  // Se os dois forem verdadeiros (items e pagamento), a mensagem deve ser 'Compra liberada 🚀'
  // Caso contrário, deve ser 'Compra bloqueada. Verifique carrinho/pagamento.'

  document.getElementById('checkoutResult').textContent = mensagem;
}

// 4. Desconto Especial liberado?
function temDescontoEspecial() {
  const primeiraCompra = document.getElementById('firstPurchase').checked;
  const cupomVip       = document.getElementById('hasVipCoupon').checked;
  let mensagem;

  // Se pelo menos um for verdadeiro (primeiraCompra ou cupomVip), a mensagem deve ser 'Desconto especial aplicado! 🎁'
  // Caso contrário, deve ser 'Desconto não disponível.'

  document.getElementById('specialResult').textContent = mensagem;
}

// Listeners
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnShipping').addEventListener('click', calculaFrete);
  document.getElementById('btnUser').addEventListener('click', mensagemDeBoasVindas);
  document.getElementById('btnCheckout').addEventListener('click', podeFazerCheckout);
  document.getElementById('btnSpecial').addEventListener('click', temDescontoEspecial);
});
