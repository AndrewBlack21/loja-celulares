import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseCliente"; // caminho certo até o arquivo
import { useCarrinho } from "./Carrinho/CarrinhoContext";
import styles from "../components/ListaProdutos.module.css";

export default function ListaProdutos({ limit = 6 }) {
  const { adicionarCarrinho } = useCarrinho();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let { data, error } = await supabase
        .from("products")
        .select(
          `id, name, price, image_url, category, description, cores_produto(id, nome_cor, codigo_cor, imagem_cor)`
        );
      console.log("--- INICIANDO TESTE DIRETO ---");
      const { data: testeCores, error: erroTeste } = await supabase
        .from("cores_produto")
        .select("*");

      // 👇 ADICIONE ESTAS DUAS LINHAS AQUI 👇
      console.log("Resultado do teste de cores:", testeCores);
      console.error("Erro no teste de cores:", erroTeste);
      console.log("--- FIM DO TESTE ---");

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
        .filter((produto) => produto.category === "Oferta")
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
              <p className={styles.description}>{produto.description}</p>
              {produto.cores_produto && produto.cores_produto.length > 0 && (
                <div className={styles.colorOptions}>
                  {produto.cores_produto.map((cor) => (
                    <button
                      key={cor.id}
                      className={styles.colorButton}
                      style={{ backgroundColor: cor.codigo_cor }}
                      onMouseEnter={(e) => {
                        e.currentTarget
                          .closest(`.${styles.cardproduto}`)
                          .querySelector("img").src = cor.imagem_cor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget
                          .closest(`.${styles.cardproduto}`)
                          .querySelector("img").src = produto.image_url;
                      }}
                      title={cor.nome_cor}
                    />
                  ))}
                </div>
              )}

              <p className={styles.price}>R$ {produto.price.toFixed(2)}</p>

              <button
                key={produto.id}
                onClick={() => adicionarCarrinho(produto)}
              >
                Comprar Agora
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
