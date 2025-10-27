'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { initialPromotions } from '@/lib/fake-data';
import Modal from '@/components/ui/Modal';
import { Promotion } from '@/types';
import { motion } from 'motion/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { delayOpacity } from '@/lib/animation-settings';

export default function Promotions() {
  return (
    <section id="promotions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Акции и предложения
        </h2>
        <motion.div {...delayOpacity}>
            <Swiper
              className='!p-10'
              pagination={{
                clickable: true,
              }}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
            {initialPromotions.map((promotion) => (
              <SwiperSlide key={promotion.id}>
                <div className="bg-white rounded-xl flex flex-col shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[500]">
                      <div className="h-48 bg-gray-200 flex items-center justify-center flex-1">
                        <div className="text-gray-500">
                          Изображение акции
                        </div>
                      </div>
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {promotion.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {promotion.description}
                        </p>
                        <button
                          onClick={() => console.log()}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300"
                        >
                          Подробнее
                        </button>
                      </div>
                    </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
      </div>
      
    </section>
  );
}