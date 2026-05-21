import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css';

import foto1 from '../assets/hotdog.jpg';
import foto2 from '../assets/carne.jpg'; 
import foto3 from '../assets/pizza.png';

function Banner({ aoClicar }) {
  const promos = [
    {
      nome: "Pastel de HotDog",
      preco: "R$ 36,00",
      descricao: "A mistura perfeita do dogão tradicional com a crocância do pastel de feira.",
      imagem: foto1,
      textoBanner: "🔥 Promoção do Dia: Pastel de HotDog!"
    },
    {
      nome: "Pastel de Carne",
      preco: "R$ 24,00",
      descricao: "O clássico de Carne com tempero especial e muita crocância.",
      imagem: foto2,
      textoBanner: "🥩 O clássico de Carne com tempero especial"
    },
    {
      nome: "Pastel de Pizza",
      preco: "R$ 24,00",
      descricao: "O sabor de sempre, com muito queijo derretido, agora em formato de pastel.",
      imagem: foto3,
      textoBanner: "🍕 Pizza: O sabor de sempre, agora em pastel"
    }
  ];

  return (
    <div className="bannerContainer">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {promos.map((promo, index) => (
          <SwiperSlide key={index} onClick={() => aoClicar(promo)} style={{ cursor: 'pointer' }}>
            <img src={promo.imagem} alt={promo.nome} className="bannerImg" />
            <div className="bannerTexto">{promo.textoBanner}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;