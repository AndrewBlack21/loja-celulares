import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseCliente";
import styles from "./Celulares.module.css";
import { useCarrinho } from "../Carrinho/CarrinhoContext";

// Swiper Carrousel Add
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Celulares({ limit = 10 }) {
  const { adicionarCarrinho } = useCarrinho();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let { data, error } = await supabase
        .from("products")
        .select("id, name, price, image_url, category, description");

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
      <div className={styles.container}>
        {produtos
          .filter((produto) => produto.category === "Celulares")
          .slice(0, limit)
          .map((produto) => (
            <SwiperSlide key={produto.id}>
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
                  <p className={styles.price}>R$ {produto.price.toFixed(2)}</p>
                  <button
                    key={produto.id}
                    onClick={() => adicionarCarrinho(produto)}
                  >
                    Comprar Agora
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </div>
    </Swiper>
  );
}
