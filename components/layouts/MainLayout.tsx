import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Modal from 'react-modal';
import { ProductModal } from '../products';
import { Navbar, Sidebar } from '../ui';
import { useAppContext } from '@/hooks';
import { OrderModal } from '../orders';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#__next');

export const MainLayout: FC<Props> = ({ title, description, children }) => {
  const { showModal, orderModal } = useAppContext();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="@Sebmm3010" />
      </Head>
      <div className="md:flex h-full">
        {/* SideBar */}
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 border-r-[1px] border-red-950 bg-yellow-300">
          <Sidebar />
        </aside>

        {/* Cuerpo */}
        <main
          className={`${inter.className} md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll scrollbar-hide`}
        >
          {/* Navbar */}
          <nav className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-1/8 fixed  bg-yellow-300">
            <Navbar />
          </nav>
          <div className="p-12">{children}</div>
        </main>
      </div>
      {showModal && (
        <Modal isOpen={showModal} style={customStyles}>
          <ProductModal />
        </Modal>
      )}
      {orderModal && (
        <Modal isOpen={orderModal} style={customStyles}>
          <OrderModal />
        </Modal>
      )}
    </>
  );
};
