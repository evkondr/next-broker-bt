import { initialSettings } from '@/lib/fake-data';
import Image from 'next/image';

const About = () => {
  const data = initialSettings;
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          О компании
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Текстовая часть */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none text-xl">
              {data.aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Фото руководителя с цитатой */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-6 overflow-hidden">
                <Image
                  src={data.leaderPhoto}
                  alt="Руководитель компании"
                  width={250}
                  height={250}
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-blue-100">&quot;</div>
                <blockquote className="text-gray-600 italic leading-relaxed relative z-10">
                  {data.quote}
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-gray-800">Александр Назаров</p>
                  <p className="text-sm text-gray-500">Руководитель компании</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About