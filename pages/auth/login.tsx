import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { LiaUserEditSolid } from 'react-icons/lia';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useAppContext } from '@/hooks';

interface FormData {
  userName: string;
  password: string;
}

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const { loginUser, logError } = useAppContext();
  const router = useRouter();

  // Motrar si hay error en autenticacion
  useEffect(() => {
    if (logError) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }, [logError]);

  const handleLogin = async ({ userName, password }: FormData) => {
    const login = await loginUser(userName, password);
    if (login) {
      router.push('/');
    } else {
      return;
    }
  };
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
            <div className="md:w-4/5 p-5 w-full">
              <div className="text-left font-bold">
                <span className="text-red-950">Mr. Rustico</span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-red-950">
                  Iniciar sesion
                </h2>
                <div className="border-2 w-10 border-red-950 inline-block mb-2 rounded-xl"></div>
                {showError && (
                  <div className="flex justify-center">
                    <div className="bg-red-600 text-white w-1/2 flex items-center justify-center rounded-md p-3">
                      <p>Error: No se pudo establecer un inicio de sesión</p>
                    </div>
                  </div>
                )}
                <p className="text-gray-600 my-3">
                  Nombre de usuario y contraseña
                </p>
                <form
                  className="flex flex-col items-center gap-1"
                  onSubmit={handleSubmit(handleLogin)}
                  noValidate
                >
                  <div
                    className={`bg-gray-100 w-64 p-2 flex items-center gap-2 border-b shadow-xl ${
                      !errors.userName ? 'border-black' : 'border-red-600'
                    }`}
                  >
                    <LiaUserEditSolid
                      className={`m-2 text-xl font-bold ${
                        errors.userName && 'text-red-600'
                      }`}
                    />
                    <input
                      className="bg-gray-100 outline-none flex-1"
                      type="text"
                      placeholder="Nombre de usuario"
                      {...register('userName', {
                        required: 'Nombre de usuario obligatorio'
                      })}
                    />
                  </div>
                  {errors.userName && (
                    <span className="text-xs text-red-600">
                      {errors.userName?.message}
                    </span>
                  )}
                  <div
                    className={`bg-gray-100 w-64 p-2 flex items-center gap-2 border-b shadow-xl ${
                      !errors.password ? 'border-black' : 'border-red-600'
                    }`}
                  >
                    <RiLockPasswordLine
                      className={`m-2 text-xl font-bold ${
                        errors.password && 'text-red-600'
                      }`}
                    />
                    <input
                      className="bg-gray-100 outline-none flex-1"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Contraseña"
                      {...register('password', {
                        required: 'Contraseña obligatoria'
                      })}
                    />
                  </div>
                  {errors.password && (
                    <span className="text-xs text-red-600">
                      {errors.password?.message}
                    </span>
                  )}

                  <div className="flex w-64 mb-5">
                    <label className="flex items-center text-xs gap-1 font-semibold">
                      <input
                        type="checkbox"
                        onChange={() => setShowPassword(!showPassword)}
                      />
                      Ver contraseña
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="border-2 border-black rounded-full px-12 py-2 inline-block font-semibold bg-red-950 text-white md:hover:bg-red-800"
                  >
                    Iniciar sesion
                  </button>
                </form>
              </div>
            </div>
            <div className="md:w-4/5 hidden md:block bg-yellow-300 text-red-950 rounded-tr-2xl rounded-br-2xl py-36 px-12">
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  return {
    props: {}
  };
};

export default LoginPage;
