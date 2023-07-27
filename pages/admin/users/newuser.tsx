import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SecondLayout } from '@/components/layouts';

interface FormData {
  fullName: string;
  userName: string;
  password: string;
  roles: string[];
}

const NewUserPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ defaultValues: { roles: ['user'] } });
  const onSubmit = (data: FormData) => {
    const newUserInfo = {
      ...data,
      userName: data.userName.toLowerCase().replace(/\s/g, '')
    };
    console.log(newUserInfo);
  };
  return (
    <SecondLayout
      title="Administracion - Crear usuario"
      description="Pagina de creacion de nuevos usarios"
    >
      <h1 className="text-4xl text-white font-bold mt-5">Crear usuario</h1>
      <p className="text-xl text-white my-9">
        La contraseña debe tener una mayúscula, una minúscula y un número.
      </p>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow p-5 mb-3 bg-gray-100 flex gap-5 items-center rounded-lg min-w-[20%] flex-col"
        >
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
              className={`bg-gray-300 border border-black w-full mt-3 p-2 rounded-lg`}
              placeholder="Juan hernandez Perea"
            />
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
              className={`bg-gray-300 border border-black w-full mt-3 p-2 rounded-lg`}
              placeholder="jhernandezp"
            />
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="block text-slate-800 font-bold text-xl"
              >
                Contraseña
              </label>
              <input
                {...register('password', {
                  required: 'La contraseña es obligatoria'
                })}
                type={showPassword ? 'text' : 'password'}
                className={`bg-gray-300 border border-black w-full mt-3 p-2 rounded-lg`}
                placeholder="Contraseña"
              />
            </div>

            {/* Checkbox */}
          </div>
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
            className="bg-red-950 text-white font-bold border-black p-3 rounded-lg"
          />
        </form>
      </div>
    </SecondLayout>
  );
};

export default NewUserPage;
