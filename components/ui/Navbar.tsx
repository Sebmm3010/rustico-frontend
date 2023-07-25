import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiUserCircle } from 'react-icons/bi';
import { UserMenu } from './UserMenu';
import { useAppContext } from '@/hooks';

export const Navbar = () => {
  const router = useRouter();
  const { isLogged, showUserMenu, setShowUserMenu } = useAppContext();
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (event?: FormEvent) => {
    event?.preventDefault();
    if (searchInput.trim().length === 0) return;
    router.push(`/buscar/${searchInput}`);
  };
  return (
    <div className="flex items-center justify-around w-full px-7 gap-2 border-b border-red-950 shadow-md">
      <ul className="flex justify-around flex-1 text-red-950 font-bold text-xl">
        <Link href="/" className="hover:underline">
          Menú
        </Link>
        <Link href="/resumen" className="hover:underline">
          Resumen
        </Link>
      </ul>
      <div className="flex items-center gap-1 my-1">
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            placeholder="Buscar"
            className="p-1 rounded-md border border-black"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
        {isLogged ? (
          <>
            <button type="button" onClick={() => setShowUserMenu(true)}>
              <BiUserCircle className="font-bold text-4xl cursor-pointer" />
            </button>
            {showUserMenu && <UserMenu />}
          </>
        ) : (
          <Link className="ml-2" href={`/auth/login?p=${router.asPath}`}>
            Iniciar
          </Link>
        )}
      </div>
    </div>
  );
};
