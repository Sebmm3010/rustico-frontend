import { ColumnDef } from '@tanstack/react-table';

import { BiEdit } from 'react-icons/bi';

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
    header: 'Nombre'
  },
  {
    accessorKey: 'descripcion',
    header: 'Descripcion'
  },
  {
    accessorKey: 'inStock',
    header: 'Stock',
    cell: ({ row }) => {
      const prod = row.original;
      return <div>{prod.inStock ? 'Disponible' : 'Agotado'}</div>;
    }
  },
  {
    accessorKey: 'categoria',
    header: 'Categoria'
  },
  {
    accessorKey: 'precio',
    header: 'Precio',
    cell: ({ row }) => {
      const prod = row.original;
      const precio = currency.format(prod.precio);
      return <div>{precio}</div>;
    }
  }
];
