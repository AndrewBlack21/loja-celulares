import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseCliente";
import styles from "./Acessorios.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useCarrinho } from "../Carrinho/CarrinhoContext";

export default function Acessorios({ limit = 4 }) {
  const { adicionarCarrinho } = useCarrinho();
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
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Pagination, Autoplay]}
      className={styles.mySwiper}
    >
      {/* Use a classe `container` aqui */}
      
        {produtos
          .filter((produto) => produto.category === "Acessorios")
          .slice(0, limit)
          .map((produto) => (
            <SwiperSlide key={produto.id}>
              <div className={styles.cardproduto}>
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
                  <button onClick={() => adicionarCarrinho(produto)}>
                    Comprar Agora
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      
    </Swiper>
    </div>
  );
}
