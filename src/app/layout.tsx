import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}