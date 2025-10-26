import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Лого и описание */}
          <div className="md:col-span-2">
            <Image  width={150} height={50} src="/logo.png" alt="Логотип компании Брокер-БТ" />
            <p className="text-gray-400 max-w-md mt-3">
              Ваш персональный гид в мире бытовой техники. Профессиональный подбор 
              и комплексное оснащение объектов любой сложности.
            </p>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-gray-400">
              {['О компании', 'Бренды', 'Акции', 'Подбор техники', 'Контакты'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p>sales@broker-bt.ru</p>
              <p>+7 (831) 213-69-96</p>
              <p className="text-sm">Нижегородская область</p>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} БРОКЕР-БТ. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}