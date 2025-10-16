import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseCliente"; // caminho certo até o arquivo
import styles from "./Produtos.module.css";

export default function Produto({ limit = 4 }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let { data, error } = await supabase
        .from("products")
        .select("id, name, price, image_url, category");

      if (error) {
        console.error("Erro ao buscar:", error);
      } else {
        console.log("fetchData -> data:", data);
        setProdutos(data);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div className={styles.container}>
      {produtos
        .filter((produto) => produto.category === "Fone de ouvido")
        .slice(0, limit)
        .map((produto) => (
          <div key={produto.id} className={styles.cardproduto}>
            <img
              src={
                produto.image_url ||
                "https://via.placeholder.com/200x200?text=Sem+Imagem"
              }
              alt={produto.name}
            />
            <div className={styles.info}>
              <h3>{produto.name}</h3>
              <p>R$ {produto.price.toFixed(2)}</p>
              <button>Comprar Agora</button>
            </div>
          </div>
        ))}
    </div>
  );
}
