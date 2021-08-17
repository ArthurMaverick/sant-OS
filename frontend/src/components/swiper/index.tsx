import React from 'react'
import { SectionContainer } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, A11y]);
export const SwiperMaster = () => {
  return (

    <SectionContainer>
       

        <div className="swiper1">
        <Swiper
       spaceBetween={10}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
      //  onSwiper={(swiper) => console.log(swiper)}
      //  onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className="cor1">1111</div></SwiperSlide>
      <SwiperSlide><div className="cor2">22222</div></SwiperSlide>
      <SwiperSlide><div className="cor3">3333</div></SwiperSlide>
      <SwiperSlide><div className="cor2">22222</div></SwiperSlide>
      <SwiperSlide><div className="cor2">22222</div></SwiperSlide>
      <SwiperSlide><div className="cor1">1111</div></SwiperSlide>

    

    </Swiper>

    </div>

      </SectionContainer>
    
  )
}


// preciso saber como funciona o elemento opiton
//precisa popular a api para pelo menos o front e o back ter 1 artigo
//saber qual o melhor forma de puxar os dados da api spa, ssr
// saber a melhor forma de deixar os dados na lateral
//aplicar ternario para busca dados com baxe no option o useEfect deve ser usado para fazer uma nova busca qaundo option mudar
// aplicar estilo.
//refatorar e testar 
