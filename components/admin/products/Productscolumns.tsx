import { ColumnDef } from '@tanstack/react-table';

import { getSession } from 'next-auth/react';
import { BiEdit, BiSolidSortAlt, BiTrash } from 'react-icons/bi';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/shadcnComponents';

import { IProduct } from '@/interfaces';
import { currency } from '@/utils';
import Link from 'next/link';
import rusticoApi from '@/apis/rusitcoApi';

const onDeleteProduct = async (id: string) => {
  const session = await getSession();
  try {
    await rusticoApi.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${session?.user.token}`
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const productsColumns: ColumnDef<IProduct>[] = [
  {
    id: 'edit',
    cell: ({ row }) => {
      const prod = row.original;
      return (
        <Link
          href={`products/edit/${prod.slug}`}
          className="text-xl hover:underline"
        >
          <BiEdit />
        </Link>
      );
    }
  },
  {
    accessorKey: 'titulo',
    header: ({ column }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="flex gap-1 items-center"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            >
              Nombre <BiSolidSortAlt />
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-black">
              <p>Ordenar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
  },
  {
    accessorKey: 'descripcion',
    header: 'Descripcion'
  },
  {
    accessorKey: 'inStock',
    header: ({ column }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="flex gap-1 items-center"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            >
              Stock <BiSolidSortAlt />
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-black">
              <p>Ordenar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    cell: ({ row }) => {
      const prod = row.original;
      return <div>{prod.inStock ? 'Disponible' : 'Agotado'}</div>;
    }
  },
  {
    accessorKey: 'categoria',
    header: ({ column }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="flex gap-1 items-center"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            >
              Categoria <BiSolidSortAlt />
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-black">
              <p>Ordenar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
  },
  {
    accessorKey: 'precio',
    header: ({ column }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="flex gap-1 items-center"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            >
              Precio <BiSolidSortAlt />
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-black">
              <p>Ordenar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    cell: ({ row }) => {
      const prod = row.original;
      const precio = currency.format(prod.precio);
      return <div>{precio}</div>;
    }
  },
  {
    id: 'delete',
    cell: ({ row }) => {
      const prod = row.original;
      return (
        <Button
          onClick={() => onDeleteProduct(prod.id as string)}
          className="text-xl hover:underline text-red-600"
        >
          <BiTrash />
        </Button>
      );
    }
  }
];
