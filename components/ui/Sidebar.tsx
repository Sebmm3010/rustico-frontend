import { categorias } from '@/utils';
import { Categoria } from './Categoria';

export const Sidebar = () => {
  return (
    <>
      <div className="flex justify-center text-3xl py-10 text-red-950 font-extrabold">
        <h2>Mr. Rustico</h2>
      </div>
      <nav className="mt-10">
        {categorias.map(({ name, icon }) => (
          <Categoria key={name} name={name} icon={icon} />
        ))}
      </nav>
    </>
  );
};
