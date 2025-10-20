'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { initialSettings } from '@/lib/fake-data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Brands() {
  const data = initialSettings;

  return (
    <section id="brands" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Наши бренды
        </h2>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="brands-swiper"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {data.brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 m-auto rounded-lg p-6 w-48 h-24 flex items-center justify-center border-2 border-gray-200 transition-all duration-300 hover:border-blue-500">
                <div className="text-gray-400 text-sm font-medium text-center">
                  {brand.split('/').pop()?.replace('.png', '')?.toUpperCase()}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .brands-swiper {
            padding: 40px 0;
          }
          
          .brands-swiper .swiper-slide {
            transition: all 0.3s ease;
          }
          
          .brands-swiper .swiper-slide-active {
            transform: scale(1.1);
            z-index: 10;
          }
          
          .brands-swiper .swiper-slide:not(.swiper-slide-active) {
            filter: blur(2px);
            opacity: 0.7;
          }
          
        `}</style>
      </div>
    </section>
  );
}