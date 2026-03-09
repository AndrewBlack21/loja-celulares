import React from "react";
import styles from "./Hero.module.css";
import logo from "/src/assets/Logo.png";
import phoneVideo from "/src/assets/imagens/phone_screen.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        Navigation
        autoHeight={true}
        Pagination={{ clickable: true }}
        autoplay={{ delay: 9000 }}
        loop={true}
        className={styles.swiper}
      >
        {/* Slide 1 — Boas-vindas */}
        <SwiperSlide className={styles.slide}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
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
                <button className={styles.btnPrimary}>Ver Produtos</button>
                <button className={styles.btnSecondary}>Saiba Mais</button>
              </div>
            </div>
            <div className={styles.imageContent}>
              <img src={logo} alt="Iphocell Logo" className={styles.logo} />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 — Assistência Técnica */}
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
              <div className={styles.serviceChips}>
                <span className={styles.chip}>📱 Tela quebrada</span>
                <span className={styles.chip}>💧 Oxidação</span>
                <span className={styles.chip}>💾 Memória</span>
                <span className={styles.chip}>🔋 Bateria</span>
              </div>
            </div>

            <div className={styles.videoWrapper}>
              <video
                className={styles.heroVideo}
                src={phoneVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
