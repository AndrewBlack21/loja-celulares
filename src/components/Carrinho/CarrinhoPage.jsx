import React, { useState } from "react";
import styles from "./CarrinhoPage.module.css";
import { useCarrinho } from "./CarrinhoContext";

export default function CarrinhoPage() {
  const { carrinho, removerProduto } = useCarrinho();
  const [formaPagamento, setFormaPagamento] = useState(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Carrinho</h2>

      <div className={styles.content}>
        {/* Lista dos produtos */}
        <div className={styles.produtos}>
          {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            carrinho.map((produto) => (
              <div key={produto.id} className={styles.cardProduto}>
                <span className={styles.tag}>{produto.category}</span>

                <img
                  src={
                    produto.image_url ||
                    "https://via.placeholder.com/200x200?text=Sem+Imagem"
                  }
                  alt={produto.name}
                />

                <div className={styles.info}>
                  <p className={styles.name}>{produto.name}</p>
                  <p className={styles.preco}>
                    R$ {Number(produto.price).toFixed(2)}
                  </p>
                  <button
                    className={styles.remover}
                    onClick={() => removerProduto(produto.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagamento */}
        <div className={styles.pagamento}>
          <h3>Formas de Pagamento</h3>

          <div className={styles.botoesPagamento}>
            <button
              className={formaPagamento === "pix" ? styles.ativo : ""}
              onClick={() => setFormaPagamento("pix")}
            >
              PIX
            </button>
            <button
              className={formaPagamento === "cartao" ? styles.ativo : ""}
              onClick={() => setFormaPagamento("cartao")}
            >
              Cartão
            </button>
          </div>

          {formaPagamento && (
            <div className={styles.formaEscolhida}>
              <h4>Forma de pagamento escolhida</h4>
              {formaPagamento === "pix" ? (
                <p>🔑 Código de pagamento no Pix</p>
              ) : (
                <p>💳 Número de parcelas no cartão escolhido</p>
              )}
            </div>
          )}

          <button className={styles.finalizar}>Finalizar</button>
        </div>
      </div>
    </div>
  );
}
