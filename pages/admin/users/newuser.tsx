import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SecondLayout } from '@/components/layouts';
import rusticoApi from '@/apis/rusitcoApi';
import { useAppContext } from '@/hooks';
import { AiOutlineClose } from 'react-icons/ai';

interface FormData {
  fullName: string;
  userName: string;
  password: string;
  roles: string[];
}

const NewUserPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSavingUser, setIsSavingUser] = useState<{
    userName: string;
    error: boolean;
    msg: string;
  }>({ userName: '', error: false, msg: '' });
  const { user } = useAppContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({ defaultValues: { roles: ['user'] } });
  const onSubmit = async (form: FormData) => {
    const newUserInfo = {
      ...form,
      userName: form.userName.toLowerCase().replace(/\s/g, '')
    };

    await rusticoApi
      .post('/auth/register', newUserInfo, {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      })
      .then(({ data }) => {
        setIsSavingUser({ userName: data.userName, error: false, msg: '' });
        reset();
      })
      .catch(({ response }) => {
        setIsSavingUser({
          userName: '',
          error: true,
          msg: response.data.message
        });
        console.log({ error: response.status, msg: response.data.message });
      });
  };

  return (
    <SecondLayout
      title="Administracion - Crear usuario"
      description="Pagina de creacion de nuevos usarios"
      navLink="/admin/users"
      navTitle="Administracion"
    >
      <h1 className="text-4xl text-white font-bold mt-5">Crear usuario</h1>
      <p className="text-xl text-white my-9">
        La contraseña debe tener una mayúscula, una minúscula y un número, y
        tener minimo 6 caracteres.
      </p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow p-5 mb-3 bg-gray-100 flex gap-5 items-center rounded-lg min-w-[20%] flex-col"
        >
          {/* Chips de validar guardado */}
          {isSavingUser.userName.length !== 0 && (
            <div className="w-full bg-green-700 flex justify-between p-3 rounded-lg text-white">
              <p className="font-bold">
                Usuario {isSavingUser.userName} guardado
              </p>
              <AiOutlineClose
                onClick={() =>
                  setIsSavingUser({ userName: '', error: false, msg: '' })
                }
                className="cursor-pointer"
              />
            </div>
          )}

          {isSavingUser?.error && (
            <div className="w-full bg-red-600 flex justify-between p-3 rounded-lg text-white">
              <div>
                <p className="font-bold">Error: {isSavingUser.msg}</p>
              </div>
              <AiOutlineClose
                onClick={() =>
                  setIsSavingUser({ userName: '', error: false, msg: '' })
                }
                className="cursor-pointer"
              />
            </div>
          )}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="block text-slate-800 font-bold text-xl"
            >
              Nombre completo
            </label>
            <input
              {...register('fullName', {
                required: 'El nombre es obligatorio'
              })}
              id="fullName"
              className={`bg-gray-300 border ${
                !errors.fullName ? 'border-black' : 'border-red-600'
              } w-full mt-3 p-2 rounded-lg`}
              placeholder="Juan hernandez Perea"
            />
            {errors.fullName && (
              <span className="text-xs text-red-600 mt-2">
                {errors.fullName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="userName"
              className="block text-slate-800 font-bold text-xl"
            >
              Nombre de usuario
            </label>
            <input
              {...register('userName', {
                required: 'Nombre de usuario obligatorio'
              })}
              id="useName"
              className={`bg-gray-300 border ${
                !errors.userName ? 'border-black' : 'border-red-600'
              } w-full mt-3 p-2 rounded-lg`}
              placeholder="jhernandezp"
            />
            {errors.userName && (
              <span className="text-xs text-red-600 mt-2">
                {errors.userName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block text-slate-800 font-bold text-xl"
            >
              Contraseña
            </label>
            <input
              {...register('password', {
                required: 'La contraseña es obligatoria',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener minimo 6 caracteres'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                  message:
                    'La contraseña debe tener minimo una minuscula, una mayuscula y un número'
                }
              })}
              type={showPassword ? 'text' : 'password'}
              className={`bg-gray-300 border ${
                !errors.password ? 'border-black' : 'border-red-600'
              } w-full mt-3 p-2 rounded-lg`}
              placeholder="Contraseña"
            />
            {errors.password && (
              <span className="text-xs text-red-600 mt-2">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* Checkbox */}
          <div className="flex flex-col mr-20">
            <h1 className="block text-slate-800 font-bold text-xl">Rol</h1>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="user"
                {...register('roles')}
                className="accent-red-950"
              />
              <label htmlFor="user">Usuario</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="super-user"
                {...register('roles')}
                className="accent-red-950"
              />
              <label htmlFor="super-user">Super usuario</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="admin"
                {...register('roles')}
                className="accent-red-950"
              />
              <label htmlFor="admin">Administrador</label>
            </div>
          </div>
          <div className="flex w-64 mb-5">
            <label className="flex items-center text-sm gap-1 font-semibold">
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              Ver contraseña
            </label>
          </div>
          <input
            type="submit"
            value="Crear usuario"
            className="bg-red-950 text-white font-bold border-black p-3 rounded-lg cursor-pointer"
          />
        </form>
      </div>
    </SecondLayout>
  );
};

export default NewUserPage;
