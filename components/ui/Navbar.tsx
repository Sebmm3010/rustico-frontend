import { AuthContext, UiContext } from '@/context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { UserMenu } from './UserMenu';

export const Navbar = () => {
  const router = useRouter();
  const { isLogged } = useContext(AuthContext);
  const { showUserMenu, setShowUserMenu } = useContext(UiContext);
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (event?: FormEvent) => {
    event?.preventDefault();
    if (searchInput.trim().length === 0) return;
    router.push(`/buscar/${searchInput}`);
  };
  return (
    <div className="flex items-center justify-end w-full px-7 gap-2 border-b border-red-950 shadow-md">
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
          <Link className="ml-2" href="/auth/login">
            Iniciar
          </Link>
        )}
      </div>
    </div>
  );
};
