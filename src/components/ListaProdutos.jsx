import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseCliente";
import { useCarrinho } from "./Carrinho/CarrinhoContext";
import styles from "../components/ListaProdutos.module.css";

export default function ListaProdutos({ limit = 6 }) {
  const { adicionarCarrinho } = useCarrinho();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [corSelecionada, setCorSelecionada] = useState({}); // guarda cor ativa por produto

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, image_url, category, description, colors");

      if (error) {
        console.error("Erro ao buscar:", error);
      } else {
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
        .filter((produto) => produto.category === "Oferta")
        .slice(0, limit)
        .map((produto) => {
          const corAtiva = corSelecionada[produto.id] || null;

          // imagem e descrição mudam conforme a cor ativa
          const imagemAtual = corAtiva?.image_url || produto.image_url;
          const descricaoAtual = corAtiva?.description || produto.description;

          return (
            <div key={produto.id} className={styles.cardproduto}>
              <img
                src={
                  imagemAtual ||
                  "https://via.placeholder.com/200x200?text=Sem+Imagem"
                }
                alt={produto.name}
              />
              <div className={styles.info}>
                <h3>{produto.name}</h3>
                <p className={styles.description}>{descricaoAtual}</p>

                {/* Botões das cores */}
                {produto.colors && produto.colors.length > 0 && (
                  <div className={styles.colorOptions}>
                    {produto.colors.map((cor, index) => (
                      <button
                        key={index}
                        className={`${styles.colorButton} ${
                          corAtiva?.hex === cor.hex ? styles.active : ""
                        }`}
                        style={{ backgroundColor: cor.hex }}
                        onClick={() =>
                          setCorSelecionada((prev) => ({
                            ...prev,
                            [produto.id]: cor,
                          }))
                        }
                        title={cor.name}
                      />
                    ))}
                  </div>
                )}

                <p className={styles.price}>R$ {produto.price.toFixed(2)}</p>

                <button
                  onClick={() => adicionarCarrinho(produto)}
                  className={styles.buyButton}
                >
                  Comprar Agora
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
