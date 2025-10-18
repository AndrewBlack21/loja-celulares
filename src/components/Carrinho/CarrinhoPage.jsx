import React from "react";
import styles from "./CarrinhoPage.module.css";
import { useCarrinho } from "./CarrinhoContext";

export default function CarrinhoPage() {
  const { carrinho, removerProduto } = useCarrinho();

  return (
    <div className={styles.container}>
      <h2>Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        carrinho.map((item) => (
          <div key={item.id} className={styles.item}>
            <img
              src={item.produtos?.imagem_url || "https://via.placeholder.com/120"}
              alt={item.produtos?.nome}
              width={120}
            />
            <div>
              <h4>{item.produtos?.nome}</h4>
              <p>Cor: {item.color}</p>
              <p>Qtd: {item.quantity}</p>
              <p>Preço: R$ {item.produtos?.preco}</p>
              <button onClick={() => removerProduto(item.id)}>Remover</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
