// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules'

// Import images
import bgimg1 from '../assets/images/slider-1.jpg'
import bgimg2 from '../assets/images/slider-2.jpg'
import bgimg3 from '../assets/images/slider-3.jpg'

// Import Slide component
import Slide from './Slide'

export default function Carousel() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Explore Ancient Civilizations through Artifacts"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Discover the Stories Behind Ancient Artworks"
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
  )
}
