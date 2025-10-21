'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { initialSettings } from '@/lib/fake-data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

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
          pagination={{
            clickable: true,
          }}
          initialSlide={Math.round(data.brands.length / 2)}
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
              <div className="m-auto rounded-lg w-48 h-24 flex items-center justify-center transition-all duration-300">
                <Image
                 width={192}
                 height={96}
                 src={`/${brand}`}
                 alt='лого'
                />
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