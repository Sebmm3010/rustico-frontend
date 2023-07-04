import Head from 'next/head';
import { LiaUserEditSolid } from 'react-icons/lia';
import { RiLockPasswordLine } from 'react-icons/ri';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Mr. Rustico - Login</title>
        <meta name="description" content="Iniciar sesion" />
        <meta name="author" content="Sebastian" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl border-2 border-black">
            <div className="md:w-3/5 p-5 w-full">
              <div className="text-left font-bold">
                <span className="text-red-950">Mr. Rustico</span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-red-950">
                  Iniciar sesion
                </h2>
                <div className="border-2 w-10 border-red-950 inline-block mb-2 rounded-xl"></div>
                <p className="text-gray-600 my-3">
                  Nombre de usuario y contraseña
                </p>
                <div className="flex flex-col items-center gap-1">
                  <div className="bg-gray-100 w-64 p-2 flex items-center gap-2 border-b border-black shadow-xl">
                    <LiaUserEditSolid className="m-2 text-xl" />
                    <input
                      className="bg-gray-100 outline-none flex-1"
                      type="text"
                      name="userName"
                      placeholder="Nombre de usuario"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center gap-2 border-b border-black shadow-xl">
                    <RiLockPasswordLine className="m-2 text-xl" />
                    <input
                      className="bg-gray-100 outline-none flex-1"
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                    />
                  </div>
                  <div className="flex w-64 mb-5">
                    <label className="flex items-center text-xs gap-1 font-semibold">
                      <input type="checkbox" />
                      Ver contraseña
                    </label>
                  </div>
                  <button
                    type="button"
                    className="border-2 border-black rounded-full px-12 py-2 inline-block font-semibold bg-red-950 text-white md:hover:bg-red-800"
                  >
                    Iniciar sesion
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 hidden md:block bg-yellow-300 text-red-950 rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hola, bienvenido!</h2>
              <div className="border-2 w-10 border-red-950 inline-block mb-2 rounded-xl"></div>
              <p className="text-black mb-2 font-semibold">
                Por favor inicié sesión usando el usuario y contraseña
                provistos.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LoginPage;
