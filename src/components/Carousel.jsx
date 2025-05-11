// Carousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import bgimg1 from '../assets/images/slider-1.jpg';
import bgimg2 from '../assets/images/slider-2.jpg';
import bgimg3 from '../assets/images/slider-3.jpg';

import Slide from './Slide';

export default function Carousel() {
  return (
    <div className="bg-[#171717]">
      <div className='lg:w-[90%] mx-auto lg:p-4'>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Travel Through Time With Historical Items"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Explore Ancient Civilizations Through Artifacts"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Unveil the Rich History of Human Culture"
          />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
