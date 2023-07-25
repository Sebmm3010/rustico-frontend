import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { CocinaNavbar } from '../cocina';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

export const SecondLayout: FC<Props> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="@Sebmm3010" />
      </Head>
      {/* Navbar aqui */}
      <nav>
        <CocinaNavbar />
      </nav>
      <div>
        <main className="h-screen overflow-y-scroll scrollbar-hide">
          <div className="p-10">{children}</div>
        </main>
      </div>
    </>
  );
};
