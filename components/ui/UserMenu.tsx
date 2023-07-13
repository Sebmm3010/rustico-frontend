import { AuthContext, UiContext } from '@/context';
import { useClickOut } from '@/hooks';
import { signOut } from 'next-auth/react';
import { FC, useContext } from 'react';
import { ImExit } from 'react-icons/im';

export const UserMenu: FC = () => {
  const { user } = useContext(AuthContext);
  const { setShowUserMenu } = useContext(UiContext);
  const ref = useClickOut(() => setShowUserMenu(false));
  return (
    <>
      <div className="bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm"></div>
      <div
        ref={ref}
        className="bg-gray-500 min-h-screen w-80 fixed top-0 right-0 border-l border-white shadow-lg"
      >
        <ul className="pt-3 text-white">
          {user?.roles.includes('admin') && (
            <>
              <li className="text-xl gap-2 mb-3 shadow-sm lg:hover:bg-gray-400 text-center flex justify-center items-center cursor-pointer">
                Panel de administracion
              </li>
              <div className="h-[1px] bg-white w-full mb-2"></div>
            </>
          )}
          <li
            className="text-xl gap-2 mb-3 shadow-sm lg:hover:bg-gray-400 text-center flex justify-center items-center cursor-pointer"
            onClick={() => signOut()}
          >
            <ImExit />
            Salir
          </li>
          <div className="h-[1px] bg-white w-full"></div>
        </ul>
      </div>
    </>
  );
};
