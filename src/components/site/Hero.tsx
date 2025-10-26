'use client'
import { delayOpacity, heroAnimate, heroAnimateWithDelay } from "@/lib/animation-settings";
import { initialSettings } from "@/lib/fake-data";
import { motion } from "motion/react"

export default function Hero() {
  const data = initialSettings;

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('${data.heroBackground}')` 
      }}
    >
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <motion.h1 {...heroAnimate} className="text-4xl md:text-6xl font-bold mb-3">
          {data.companyName}
        </motion.h1>
        <motion.div {...delayOpacity} className="w-full bg-yellow-200/20 h-[1px] mb-3 bg-gradient-to-r from-transparent via-yellow-200 to-transparent shadow-[0_0_15px_3px_rgba(255,165,0,0.5)]"></motion.div>
        <motion.p {...heroAnimateWithDelay} className="text-xl md:text-3xl mb-8 animate-fade-in-delay">
          {data.slogan}
        </motion.p>
        <motion.button
          {...delayOpacity}
          onClick={() => document.querySelector('#selection')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-yellow-200 text-zinc-800 px-8 py-3 rounded-lg font-semibold text-lg transition-transform duration-200 transform hover:scale-105 cursor-pointer"
        >
          Подобрать технику
        </motion.button>
      </div>

      {/* Анимация скролла вниз */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}