import React from "react";
import styles from "./Hero.module.css";
import logo from "/src/assets/Logo.png";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Aparelhos quebrados
import TelaQuebrada from "/src/assets/imagens/Tela quebrada.png";
import Oxidacao from "/src/assets/imagens/Oxidcao.png";
import Memoria from "/src/assets/imagens/Memoria.png";

// Import typewriter
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        Navigation
        Pagination={{ clickable: true }}
        autoplay={{ delay: 9000 }}
        loop={true}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                {/* Bem-vindo á <span>Iphocell</span> */}
                <Typewriter
                  words={[
                    "Bem-vindo a Iphocell",
                    "A melhor loja de Santos",
                    "Voce ira encontra os melhores preço",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>
              <p className={styles.subtitle}>
                A melhor loja de celulares e acessorios do brasil com os
                melhores preços do mercado.
              </p>
              <div className={styles.button}>
                <button className={styles.btnPrimary}> Ver Produtos</button>
                <button className={styles.btnSecondary}> Saiba Mais</button>
              </div>
            </div>

            <div className={styles.imageContent}>
              <img src={logo} alt="Iphocell Logo" className={styles.logo} />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                Promoções <span>Imperdíveis</span>
              </h1>
              <p className={styles.subtitle}>
                Smartphones, capas e acessórios com descontos exclusivos.
              </p>
              <div className={styles.button}>
                <button className={styles.btnPrimary}>Ver Ofertas</button>
                <button className={styles.btnSecondary}>Saiba Mais</button>
              </div>
            </div>
            <div className={styles.imageContent}>
              <img src={logo} alt="Promoções" className={styles.logo} />
            </div>
          </div>
        </SwiperSlide> */}

        {/* Slide 3 */}
        <SwiperSlide>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                Assistência <span>Técnica</span>
              </h1>
              <p className={styles.subtitle}>
                Consertos rápidos e garantidos para o seu celular.
              </p>
              <div className={styles.button}>
                <button className={styles.btnPrimary}>Agendar Reparo</button>
                <button className={styles.btnSecondary}>
                  Falar com a Gente
                </button>
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img src={TelaQuebrada} alt="Tela Quebrada" />
              </div>
              <div className={styles.card}>
                <img src={Oxidacao} alt="Tela" className="card-destaque" />
              </div>
              <div className={styles.card}>
                <img src={Memoria} alt="Memoria" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
