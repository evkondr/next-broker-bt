import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import About from '@/components/site/About';
import Brands from '@/components/site/Brands';
import Promotions from '@/components/site/Promotions';
import SelectionForm from '@/components/site/SelectionForm';
import Contacts from '@/components/site/Contacts';
import Footer from '@/components/site/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Brands />
      <Promotions />
      <SelectionForm />
      <Contacts />
      <Footer />
    </main>
  );
}