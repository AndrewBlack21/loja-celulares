import React from "react";
import styles from "./CardProduto.module.css";

export default function CardProduto({ nome, preco, img }) {
  return (
    <div className={styles.cardproduto}>
      <img src={img} alt={nome} />
      <h3>{nome}</h3>
      <p>{preco}</p>
      <button>Compra Agora</button>
    </div>
  );
}
