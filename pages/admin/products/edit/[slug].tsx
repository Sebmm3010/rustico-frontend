import { NextPage } from 'next';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { BiEdit, BiSave } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { SecondLayout } from '@/components/layouts';
import { IProduct } from '@/interfaces';

interface FormData {
  titulo: string;
  precio: number;
  descripcion: string;
  tags: string[];
  imagen: string;
  slug: string;
  inStock: boolean;
  categoria: string;
}
interface Props {
  product: IProduct;
}

const EditProducts: NextPage<Props> = ({ product }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    const formData = { ...data, inStock: Boolean(data.inStock) };
    console.log({ formData });
  };

  return (
    <SecondLayout
      title="Administracion - Productos"
      description="Dashboard administrativa de productos"
      navLink="/admin/products"
      navTitle="Administracion"
    >
      <h1 className="text-4xl text-white font-bold mt-5 flex items-center gap-1">
        {' '}
        <BiEdit /> Producto
      </h1>
      <p className="text-xl text-white my-9">
        Editando: <span className="font-bold underline">Deditos de queso</span>
      </p>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white font-bold p-3 rounded-md gap-2 my-2 flex justify-center items-center">
            <BiSave className="text-xl" /> Guardar
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-2">
          {/* Inputs principales */}
          <input
            type="text"
            className="col-start-1 p-3 rounded-md my-2 border-b-gray-500 border-4"
            placeholder="Titulo"
            {...register('titulo')}
          />
          <input
            type="number"
            className="col-start-1 p-3 rounded-md my-2 border-b-gray-500 border-4"
            placeholder="Precio"
            {...register('precio')}
          />
          <textarea
            className="col-start-1 p-3 rounded-md my-2 border-b-gray-500 border-4"
            placeholder="Descripcion"
            {...register('descripcion')}
          />

          <div className="col-start-1">
            <label
              htmlFor="categoria"
              className="block mb-2 text-sm font-medium text-white"
            >
              Seleccionar Categoria
            </label>
            {/* Seleccionar categoria */}
            <select
              {...register('categoria')}
              id="categoria"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">-- Seleccionar -- </option>
              <option value="desayuno">Desayuno</option>
              <option value="entrada">Entrada</option>
              <option value="asado">Asado</option>
              <option value="mariscos">Mariscos</option>
              <option value="alitas">Alitas</option>
              <option value="hamburguesa">Hamburguesa</option>
              <option value="familiar">Familiar</option>
              <option value="bebida">Bebida</option>
            </select>
          </div>
          {/* In stock */}
          <div className="col-start-1 row-start-2 text-white">
            <h3 className="mb-2 font-semibold">Disponibilidad</h3>
            <div className="flex items-center mb-4 colum">
              <input
                id="default-radio-1"
                type="radio"
                value="true"
                className="w-4 h-4"
                {...register('inStock')}
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium"
              >
                Disponible
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="false"
                className="w-4 h-4"
                {...register('inStock')}
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium"
              >
                No dispobible
              </label>
            </div>
          </div>

          {/* Segundo grid  */}
          <input
            type="text"
            className="col-start-2 row-start-1 p-3 rounded-md my-2 border-b-gray-500 border-4"
            placeholder="Slug - URL"
            {...register('slug')}
          />
          <div className="col-start-2 row-start-2">
            <input
              type="text"
              className="p-3 rounded-md my-2 border-b-gray-500 border-4 w-full"
              placeholder="Etiquetas"
            />
            <span className="text-white text-xs">
              Presione [spacebar] para agregar
            </span>
          </div>
          <div className="text-white col-start-2 row-start-3 flex items-start gap-2">
            <span className="rounded-lg bg-red-950 p-2 flex items-center">
              pan
              <AiFillCloseCircle className="ml-2" />
            </span>
          </div>
          <div className="col-start-2 row-start-4 flex flex-col">
            <input type="file" className="mb-2" />
            <div className="flex flex-col gap-2 items-start justify-start">
              <Image
                className="border-black rounded-md border-2"
                src="https://res.cloudinary.com/sebastianow/image/upload/v1684010639/rustico/bh0sy3i7ijpiwuhqaduf.webp"
                alt="img"
                width={200}
                height={300}
              />
              <button className="flex justify-center items-center gap-2 bg-[#ff0000] rounded-md p-2">
                <AiFillCloseCircle /> Eliminar
              </button>
            </div>
          </div>
        </div>
      </form>
    </SecondLayout>
  );
};

export default EditProducts;