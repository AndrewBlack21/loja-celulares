import React, { useState } from "react";
import styles from "./LojaSelector.module.css";

export default function LojaSelector() {
  const [endereco, setEndereco] = useState("Rua Exemplo, 123");

  const enderecos = {
    unidade1: "Rua Exemplo, 123",
    unidade2: "Avenida Teste, 456",
    unidade3: "Praça Central, 789",
  };

  function handleChange(e) {
    setEndereco(enderecos[e.target.value]);
  }

  return (
    <section className={styles.section2}>
      <div className={styles.logo}>
        <img src="/src/assets/Logo.png" alt="" />
      </div>

      <select
        className={styles.dropdown}
        id="selectLoja"
        onChange={handleChange}
      >
        <option value="unidade1">Unidade 1</option>
        <option value="unidade2">Unidade 2</option>
        <option value="unidade3">Unidade 3</option>
      </select>
      <div className={styles.endereco} id="enderecoLoja">
        {endereco}
      </div>
    </section>
  );
}
