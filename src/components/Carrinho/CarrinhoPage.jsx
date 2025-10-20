import React from "react";
import styles from "./CarrinhoPage.module.css";
import { useCarrinho } from "./CarrinhoContext";

export default function CarrinhoPage() {
  const { carrinho, removerProduto, limparCarrinho } = useCarrinho(); // Adicionei limparCarrinho

  // Calcula o valor total do carrinho
  const total = carrinho.reduce((acc, item) => {
    const price = Number(item.produtos?.preco) || 0;
    const quantity = Number(item.quantity) || 0;
    return acc + price * quantity;
  }, 0);

  // Se o carrinho estiver vazio, mostra uma mensagem
  if (carrinho.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.titulo}>Meu Carrinho</h2>
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          Seu carrinho está vazio.
        </p>
      </div>
    );
  }

  // Layout principal com as duas colunas
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Meu Carrinho</h2>
      <div className={styles.carrinhoContainer}>
        {/* COLUNA DA ESQUERDA: LISTA DE PRODUTOS */}

        <div className={styles.produtos}>
          {carrinho.map((item) => (
            <div key={item.id} className={styles.cardProduto}>
              <img
                src={
                  item.produtos?.imagem_url || "https://via.placeholder.com/150"
                }
                alt={item.produtos?.nome}
              />
              <div className={styles.cardProdutoInfo}>
                <h4 className={styles.nome}>{item.produtos?.nome}</h4>
                <p>Cor: {item.color}</p>
                <p>Qtd: {item.quantity}</p>
                <p className={styles.preco}>
                  R$ {Number(item.produtos?.preco).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removerProduto(item.id)}
                className={styles.remover}
              >
                Remover
              </button>
            </div>
          ))}
        </div>

        {/* COLUNA DA DIREITA: RESUMO DO PAGAMENTO */}
        <div className={styles.pagamento}>
          <h3>Resumo do Pedido</h3>
          <div style={{ padding: "1rem" }}>
            <p>
              Subtotal: <strong>R$ {total.toFixed(2)}</strong>
            </p>
            <p>
              Frete: <strong>Grátis</strong>
            </p>
            <hr />
            <p>
              Total: <strong>R$ {total.toFixed(2)}</strong>
            </p>
          </div>

          <div className={styles.formaEscolhida}>
            <h4>Formas de Pagamento</h4>
            <div className={styles.botoesPagamento}>
              {/* Aqui você pode adicionar ícones ou botões de pagamento */}
              <span>PIX</span>
              <span>Cartão</span>
              <span>Boleto</span>
            </div>
          </div>

          <div className={styles.finalizar}>
            <button
              className={styles.remover}
              style={{
                backgroundColor: "#00ff88",
                color: "#000",
                width: "100%",
                padding: "10px",
              }}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
