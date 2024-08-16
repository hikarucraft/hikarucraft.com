import Image from 'next/image';
import styles from './page.module.scss';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <header>
      <Header />
      <main></main>
      <Footer />
    </header>
  );
}
