import { ColumnDef } from '@tanstack/react-table';

import { BiEdit, BiSolidSortAlt } from 'react-icons/bi';

import {
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
  }
];
