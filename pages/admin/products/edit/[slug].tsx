import { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { BiEdit, BiSave } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { SecondLayout } from '@/components/layouts';
import rusticoApi from '@/apis/rusitcoApi';
import { IProduct } from '@/interfaces';

interface FormData {
  id?: string;
  titulo: string;
  precio: number;
  descripcion: string;
  tags: string[];
  imagen: string;
  slug: string;
  inStock: boolean | string;
  categoria: string;
}
interface Props {
  product: IProduct;
}

const EditProducts: NextPage<Props> = ({ product }) => {
  const [newTagValue, setNewTagValue] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setValue
  } = useForm<FormData>({
    defaultValues: product
  });
  // Sugerencia de slug
  useEffect(() => {
    const suscription = watch((value, { name, type }) => {
      console.log({ value, name, type });
      if (name === 'titulo') {
        const newSlug =
          value.titulo
            ?.trim()
            .replaceAll(' ', '-')
            .replaceAll("'", '')
            .toLowerCase() || '';

        setValue('slug', newSlug);
      }
    });
    return () => suscription.unsubscribe();
  }, [watch, setValue]);
  // ? Nueva etiqueta
  const onNewTag = () => {
    const newTag = newTagValue.trim().toLowerCase();
    setNewTagValue('');
    const currentTags = getValues('tags');
    if (currentTags.includes(newTag)) {
      return;
    }
    currentTags.push(newTag);
  };

  // ? Eliminar etiqueta
  const onDeleteTag = (tag: string) => {
    const updatedTags = getValues('tags').filter((t) => t !== tag);
    setValue('tags', updatedTags, { shouldValidate: true });
  };
  const onSubmit = async (data: FormData) => {
    const formData = {
      ...data,
      inStock: JSON.parse(data.inStock as string)
    };
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
        <div className="grid grid-cols-2 grid-rows-1 gap-2 gap-x-3">
          {/* Inputs principales */}
          <input
            type="text"
            className={`col-start-1 p-3 rounded-md my- border-4 ${
              errors.titulo
                ? 'border-b-red-600 placeholder-red-600'
                : 'border-b-gray-500'
            }`}
            placeholder="Titulo"
            {...register('titulo', { required: 'El titulo es obligatorio' })}
          />
          {errors.titulo && (
            <span className="text-red-600 text-xs">
              {errors.titulo.message}
            </span>
          )}
          <input
            type="number"
            className={`col-start-1 p-3 rounded-md my-2 border-4 ${
              errors.precio
                ? 'border-b-red-600 placeholder-red-600'
                : 'border-b-gray-500'
            }`}
            placeholder="Precio"
            {...register('precio', {
              required: 'El precio es obligatorio',
              pattern: {
                value: /^[1-9]\d*$/,
                message: 'Solo se aceptan números positivos'
              }
            })}
          />
          {errors.precio && (
            <span className="text-red-600 text-xs">
              {errors.precio.message}
            </span>
          )}
          <textarea
            className="col-start-1 p-3 rounded-md my-2 border-b-gray-500 border-4"
            placeholder="Descripcion"
            {...register('descripcion', {
              required: 'La descripcion es obligatoria'
            })}
          />
          {errors.descripcion && (
            <span className="text-red-600 text-xs">
              {errors.descripcion.message}
            </span>
          )}

          <div className="col-start-1">
            <label
              htmlFor="categoria"
              className={`block mb-2 text-sm font-medium ${
                errors.categoria ? 'text-red-600' : 'text-white'
              }`}
            >
              Seleccionar Categoria
            </label>
            {/* Seleccionar categoria */}
            <select
              {...register('categoria', {
                required: 'Seleccione una categoria'
              })}
              id="categoria"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
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
            {errors.categoria && (
              <span className="text-red-600 text-xs">
                {errors.categoria.message}
              </span>
            )}
          </div>
          {/* In stock */}
          <div className="col-start-1 row-start-2 text-white">
            <select
              {...register('inStock')}
              id="inStock"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="true">Disponible</option>
              <option value="false">No disponible</option>
            </select>
          </div>

          {/* Segundo grid  */}
          <div className="col-start-2 row-start-1 w-full">
            <input
              type="text"
              className="p-3 rounded-md my-2 border-b-gray-500 border-4 w-full"
              placeholder="Slug - URL"
              {...register('slug', {
                required: 'Este campo es obligatorio',
                validate: (val) =>
                  val.trim().includes(' ')
                    ? 'Sin espacios en blanco'
                    : undefined
              })}
            />
            {errors.slug && (
              <span className="text-red-600 text-xs">
                {errors.slug.message}
              </span>
            )}
          </div>

          <div className="col-start-2 row-start-2">
            <input
              type="text"
              className="p-3 rounded-md my-2 border-b-gray-500 border-4 w-full"
              placeholder="Etiquetas"
              value={newTagValue}
              onChange={({ target }) => setNewTagValue(target.value)}
              onKeyDown={({ code }) =>
                code === 'Space' ? onNewTag() : undefined
              }
            />
            <span className="text-white text-xs">
              Presione [spacebar] para agregar
            </span>
          </div>
          <div className="text-white col-start-2 row-start-3 flex flex-wrap items-start gap-2">
            {getValues('tags').map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-red-950 p-2 flex items-center"
              >
                {tag}
                <AiFillCloseCircle
                  className="ml-2 cursor-pointer"
                  onClick={() => onDeleteTag(tag)}
                />
              </span>
            ))}
          </div>
          <div className="col-start-2 row-start-4 flex flex-col">
            <input type="file" className="mb-2" />
            <div className="flex flex-col gap-2 items-start justify-start">
              <Image
                className="border-black rounded-md border-2"
                src={getValues('imagen')}
                alt={getValues('titulo')}
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = '' } = query;

  const rusticoData = await rusticoApi
    .get(`/products/${slug.toString()}`)
    .catch(() => false);
  if (!rusticoData) {
    return {
      redirect: {
        destination: '/admin/products',
        permanent: false
      }
    };
  }
  const { data } = rusticoData as any;
  return {
    props: {
      product: data
    }
  };
};

export default EditProducts;
