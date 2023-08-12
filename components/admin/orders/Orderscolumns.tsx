import { getSession } from 'next-auth/react';

import { BiSolidSortAlt, BiSolidDownArrow } from 'react-icons/bi';

import { ColumnDef } from '@tanstack/react-table';

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

import { IFullOrder } from '@/interfaces';
import { currency, dateFormat } from '@/utils';

export const ordersColumns: ColumnDef<IFullOrder>[] = [
  {
    accessorKey: 'createdAt',
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
              Fecha de creacion <BiSolidSortAlt />
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-black">
              <p>Ordenar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    cell: ({ row }) => {
      const order = row.original;
      const date = dateFormat(order.createdAt);
      return <div>{date}</div>;
    }
  },
  {
    accessorKey: 'user',
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
              Mesero <BiSolidSortAlt />
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-black">
              <p>Ordenar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    cell: ({ row }) => {
      const order = row.original;
      const { user } = order;
      return <div>{user.fullName}</div>;
    }
  },
  {
    accessorKey: 'mesa',
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
              Mesa <BiSolidSortAlt />
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
    accessorKey: 'orderItems',
    header: 'Platos',
    cell: ({ row }) => {
      const order = row.original;
      const arrayTitulos = order.orderItems.map((item) => item.titulo);
      const content = arrayTitulos.join(', ');
      return <div>{content}</div>;
    }
  },
  {
    accessorKey: 'orderSubTotal',
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
              Sub-Total <BiSolidSortAlt />
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-black">
              <p>Ordenar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    cell: ({ row }) => {
      const order = row.original;
      const precio = currency.format(Number(order.orderSubTotal));
      return <div>{precio}</div>;
    }
  },
  {
    accessorKey: 'total',
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
              Total de la orden <BiSolidSortAlt />
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-black">
              <p>Ordenar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    cell: ({ row }) => {
      const order = row.original;
      const precio = currency.format(Number(order.total));
      return <div>{precio}</div>;
    }
  },
  {
    accessorKey: 'nota',
    header: 'Nota',
    cell: ({ row }) => {
      const order = row.original;
      const content = order.nota || 'Sin anotaciones';
      return <div>{content}</div>;
    }
  }
];
