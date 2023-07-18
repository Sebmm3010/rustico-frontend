import { FC } from 'react';
import { signOut } from 'next-auth/react';
import { ImExit } from 'react-icons/im';
import { useAppContext, useClickOut } from '@/hooks';

export const UserMenu: FC = () => {
  const { user, setShowUserMenu } = useAppContext();
  const ref = useClickOut(() => setShowUserMenu(false));
  return (
    <>
      <div className="bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm"></div>
      <div
        ref={ref}
        className="bg-gray-900 min-h-screen w-80 absolute top-0 right-0 border-l border-white shadow-lg z-[999]"
      >
        <h1 className="text-white text-4xl font-bold text-center mt-5 border-b p-2">
          Mr. Rustico
        </h1>
        <div className="flex justify-center items-center h-full left-0 right-0 absolute">
          <ul className="p-3 text-white">
            {user?.roles.includes('admin') && (
              <>
                <li className="text-xl gap-2 mb-3 shadow-sm lg:hover:bg-gray-800 text-center flex justify-center items-center cursor-pointer border-t border-b">
                  <p className="block m-2">Panel de administracion</p>
                </li>
              </>
            )}
            <li
              className="text-xl shadow-sm lg:hover:bg-gray-800 text-center cursor-pointer border-b"
              onClick={() => signOut()}
            >
              <p className="flex justify-center items-center gap-2 p-3">
                <ImExit />
                Salir
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
