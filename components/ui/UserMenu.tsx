import { AuthContext } from '@/context';
import { signOut } from 'next-auth/react';
import { FC, useContext, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { ImExit } from 'react-icons/im';

export const UserMenu: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div className="mr-4">
      <BiUserCircle
        className="font-bold text-4xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <div className="bg-yellow-300 p-4 shadow-lg absolute right-4 border border-black rounded-md">
          <ul className="text-red-950">
            <li className="border-b-red-950 border-b">Perfil</li>
            {user?.roles.includes('admin') && (
              <li className="border-b-red-950 border-b">Admin panel</li>
            )}
            <button
              type="button"
              className="flex justify-center items-center gap-2 mt-2"
              onClick={() => signOut()}
            >
              Salir <ImExit />
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};
