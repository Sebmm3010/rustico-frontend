import { FC, useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import {
  AiOutlineDown,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUsergroupAdd
} from 'react-icons/ai';
import { GiKnifeFork } from 'react-icons/gi';
import { ImExit } from 'react-icons/im';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdReceiptLong } from 'react-icons/md';
import { useAppContext, useClickOut } from '@/hooks';

export const UserMenu: FC = () => {
  const [subMenu, setSubMenu] = useState(false);
  const { user, setShowUserMenu } = useAppContext();
  const ref = useClickOut(() => setShowUserMenu(false));
  return (
    <>
      <div className="bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm"></div>
      <div
        ref={ref}
        id="drawer-navigation"
        className="fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-gray-800"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold uppercase text-white"
        >
          Menú
        </h5>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/* subMenu */}
            <li>
              <Link
                onClick={() => setShowUserMenu(false)}
                href="/"
                className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
              >
                <AiOutlineHome />
                <span className="ml-3">Inicio</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setSubMenu(!subMenu)}
                type="button"
                className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group text-white hover:bg-gray-700"
              >
                <AiOutlineUser />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Usuario
                </span>
                <AiOutlineDown />
              </button>
              <ul
                id="dropdown-example"
                className={`${subMenu ? 'block' : 'hidden'} py-2 space-y-2`}
              >
                <li>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700 gap-2"
                  >
                    <ImExit />
                    Salir
                  </button>
                </li>
              </ul>
            </li>

            {/* LInks */}
            <li>
              <Link
                onClick={() => setShowUserMenu(false)}
                href="/cocina"
                className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
              >
                <GiKnifeFork className="font-bold text-xl" />
                <span className="ml-3">Cocina</span>
              </Link>
            </li>
          </ul>
          {user?.roles.includes('admin') && (
            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
              <li>
                <Link
                  onClick={() => setShowUserMenu(false)}
                  href="/admin/users"
                  className="flex items-center p-2 transition duration-75 rounded-lg  hover:bg-gray-700 text-white group"
                >
                  <AiOutlineUsergroupAdd className="font-bold text-xl" />
                  <span className="ml-4">Panel Usuarios</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowUserMenu(false)}
                  href="/admin/products"
                  className="flex items-center p-2 transition duration-75 rounded-lg  hover:bg-gray-700 text-white group"
                >
                  <IoFastFoodOutline className="font-bold text-xl" />
                  <span className="ml-4">Panel Productos</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowUserMenu(false)}
                  href="/admin/orders"
                  className="flex items-center p-2 transition duration-75 rounded-lg  hover:bg-gray-700 text-white group"
                >
                  <MdReceiptLong className="font-bold text-xl" />
                  <span className="ml-4">Panel de Ordenes</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
