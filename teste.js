var lanchonete = {
  cliente: {
      nome: "Giovana",
      endereco: "Castelo Branco 254",
      cpf: "837.875.152-10"
  },
  pedido: {
      itens: [
          { nome: "X-Burger", preco: 15.50 },
          { nome: "Refrigerante", preco: 5.00 }
      ],
      total: function() {
          let total = 0;
          this.itens.forEach(function(item) {
              total += item.preco;
          });
          return total;
      }
  },
  entrega: {
      endereco: "Castelo Branco 254",
      taxaEntrega: 3.50,
      horarioEntrega: "20:00"
  }
};

console.log("Cliente: " + lanchonete.cliente.nome);
console.log("Endereço: " + lanchonete.cliente.endereco);
console.log("CPF: " + lanchonete.cliente.cpf);
console.log("Pedido:");
lanchonete.pedido.itens.forEach(function(item) {
  console.log("- " + item.nome + ": R$ " + item.preco.toFixed(2));
});
console.log("Total: R$ " + lanchonete.pedido.total().toFixed(2));
console.log("Entrega:");
console.log("- Endereço: " + lanchonete.entrega.endereco);
console.log("- Taxa de entrega: R$ " + lanchonete.entrega.taxaEntrega.toFixed(2));
console.log("- Horário de entrega: " + lanchonete.entrega.horarioEntrega);
