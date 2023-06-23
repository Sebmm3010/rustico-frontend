import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Sidebar } from '../ui';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Sebastian Madero" />
      </Head>
      <div className="md:flex h-full">
        {/* SideBar */}
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 border-r-[1px] border-red-950 bg-yellow-300 h-full">
          <Sidebar />
        </aside>
        {/* Cuerpo */}
        <main
          className={`${inter.className} md:w-8/12 xl:w-3/4 2xl:w-4/5 h-3/4`}
        >
          {children}
        </main>
      </div>
    </>
  );
};
