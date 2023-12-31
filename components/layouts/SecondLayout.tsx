import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { SecondNavbar } from '../ui';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  navTitle: string;
  navLink: string;
}

export const SecondLayout: FC<Props> = ({
  title,
  description,
  children,
  navLink,
  navTitle
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="@Sebmm3010" />
      </Head>
      {/* Navbar aqui */}
      <nav>
        <SecondNavbar navLink={navLink} navTitle={navTitle} />
      </nav>
      <div>
        <main className="h-screen overflow-y-scroll hide-scrollbar">
          <div className="p-10">{children}</div>
        </main>
      </div>
    </>
  );
};
