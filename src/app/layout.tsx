import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: '200',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'БРОКЕР-БТ - Ваш персональный гид в мире бытовой техники',
  description: 'Профессиональный сервис по подбору бытовой и встраиваемой техники. Индивидуальный подход, лучшие цены, гарантия качества.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}