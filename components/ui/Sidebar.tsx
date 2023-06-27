import Link from 'next/link';
import { categorias } from '@/utils';
import { Categoria } from './Categoria';

export const Sidebar = () => {
  return (
    <>
      <div className="flex justify-center text-3xl py-10 text-red-950 font-extrabold">
        <Link href="/">
          <h2>Mr. Rustico</h2>
        </Link>
      </div>
      <nav className="mt-10">
        {categorias.map(({ name, icon, link }) => (
          <Categoria key={name} name={name} icon={icon} link={link} />
        ))}
      </nav>
    </>
  );
};
