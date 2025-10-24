import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const imagens = [
  "https://vrpvbnbiwdvbirfakogp.supabase.co/storage/v1/object/public/produtos/trocatela.png",
  "https://vrpvbnbiwdvbirfakogp.supabase.co/storage/v1/object/public/produtos/trocaiphone.png",
];
export default function CarrouselService() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      Pagination={{ clickable: true }}
      Autoplay={{ delay: 3000 }}
      loop={true}
    >
      {imagens.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
