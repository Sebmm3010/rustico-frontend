import { ColumnDef } from '@tanstack/react-table';

import { BiSolidSortAlt, BiSolidDownArrow, BiEdit } from 'react-icons/bi';

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

export const productsColumns: ColumnDef<IProduct>[] = [
  {
    id: 'edit',
    cell: ({ row }) => (
      <button>
        <BiEdit />
      </button>
    )
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
