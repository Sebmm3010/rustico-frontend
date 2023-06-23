import Image from 'next/image';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/components/layouts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <MainLayout
      title="Mr. Rustico - Inicio"
      description="Inicio de aplicacion Mr. Rustico"
    >
      <h1>Hola mundo</h1>
    </MainLayout>
  );
}
