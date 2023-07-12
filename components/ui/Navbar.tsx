import { AuthContext } from '@/context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { BiUserCircle, BiSearchAlt } from 'react-icons/bi';
import { UserMenu } from './UserMenu';

export const Navbar = () => {
  const router = useRouter();
  const { isLogged } = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState('');
  const onSearch = () => {
    if (searchInput.trim().length === 0) return;
    router.push(`/buscar/${searchInput}`);
  };
  return (
    <div className="flex items-center justify-end w-full px-7 gap-2">
      <div className="flex items-center gap-1 my-1">
        <input
          type="text"
          placeholder="Buscar"
          className="p-1 rounded-md border border-black"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        />
        <button
          className="border border-black rounded-md p-1 bg-white"
          type="button"
          onClick={onSearch}
        >
          <BiSearchAlt className="text-xl" />
        </button>
        {isLogged ? (
          <UserMenu />
        ) : (
          <Link className="ml-2" href="/auth/login">
            Iniciar
          </Link>
        )}
      </div>
    </div>
  );
};
