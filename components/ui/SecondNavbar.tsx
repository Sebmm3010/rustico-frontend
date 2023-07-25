import { BiUserCircle } from 'react-icons/bi';
import { useAppContext } from '@/hooks';
import Link from 'next/link';
import { UserMenu } from '.';

export const SecondNavbar = () => {
  const { isLogged, setShowUserMenu, showUserMenu } = useAppContext();
  return (
    <div className="bg-yellow-300 fixed top-0 left-0 right-0 p-3">
      <div className="flex justify-around w-full gap-96">
        <h1 className="font-bold text-red-900 text-xl">
          <Link href="/cocina">Mr. Rustico - Cocina</Link>
        </h1>
        {!isLogged ? (
          <button>Iniciar</button>
        ) : (
          <>
            <button className="text-3xl" onClick={() => setShowUserMenu(true)}>
              <BiUserCircle />
            </button>
            {showUserMenu && <UserMenu />}
          </>
        )}
      </div>
    </div>
  );
};
