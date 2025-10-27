'use client'
import { initialSettings } from '@/lib/fake-data';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { fadeByX } from '@/lib/animation-settings';


export default function Contacts() {
  const data = initialSettings;

  return (
    <section id="contacts" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Контакты
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Реквизиты */}
          <motion.div {...fadeByX(-50)} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">
              Реквизиты компании
            </h3>
            <div className="bg-gray-700 rounded-lg p-6">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                {data.contacts.requisites}
              </pre>
            </div>
          </motion.div>

          {/* Контактная информация */}
          <motion.div {...fadeByX(50)} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">
              Свяжитесь с нами
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="border p-3 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href={`mailto:${data.contacts.email}`}
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    {data.contacts.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="border p-3 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Телефон</p>
                  <div className='flex gap-3'>
                    {data.contacts.phone.split(',').map((number) => (
                      <a key={number}
                        href={`tel:${number.replace(/\D/g, '')}`}
                        className="text-white hover:text-blue-300 transition-colors"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                  
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="border p-3 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Адрес</p>
                  <p className="text-white">{data.contacts.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="border p-3 rounded-lg">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Режим работы</p>
                  <p className="text-white">Пн-Пт: 9:00-18:00</p>
                  <p className="text-white">Сб-Вс: 10:00-16:00</p>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-300">
                Мы в мессенджерах
              </h4>
              <div className="flex space-x-4">
                <Link href="">
                  <Image src={'tg.svg'} width={30} height={30} alt=''/>
                </Link>
                <Link href="">
                  <Image src={'ws.svg'} width={30} height={30} alt=''/>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}