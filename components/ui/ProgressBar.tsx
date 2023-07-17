import { useAppContext } from '@/hooks';
import { useRouter } from 'next/router';

const links = [
  { id: 1, titulo: 'Menú', url: '/' },
  { id: 2, titulo: 'Resumen', url: '/resumen' },
  { id: 3, titulo: 'Confirmar compra', url: '/total' }
];
export const ProgressBar = () => {
  const { actualPage, setActualPage } = useAppContext();
  const router = useRouter();
  const handleBar = (payload: number, url: string) => {
    setActualPage(payload);
    router.push(url);
  };
  return (
    <>
      <div className="text-white relative top-14 flex justify-between mx-12 mb-10">
        {links.map((link) => (
          <button
            onClick={() => handleBar(link.id, link.url)}
            className={`text-2xl font-bold hover:underline ${
              actualPage === link.id && 'underline'
            }`}
            key={link.id}
          >
            {link.titulo}
          </button>
        ))}
      </div>
    </>
  );
};
