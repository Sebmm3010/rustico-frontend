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

import rusticoApi from '@/apis/rusitcoApi';

import { IAdminUsers } from '@/interfaces';

const actualizarUsuario = async (id: string, state: boolean) => {
  const session = await getSession();
  await rusticoApi.put(
    `/admin/switch-active/${id}`,
    { isActive: state },
    {
      headers: {
        Authorization: `Bearer ${session?.user.token}`
      }
    }
  );
};
export const usersColumns: ColumnDef<IAdminUsers>[] = [
  {
    accessorKey: 'fullName',
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
    accessorKey: 'userName',
    header: 'Usuario'
  },
  {
    accessorKey: 'roles',
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
              Roles <BiSolidSortAlt />
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
    accessorKey: 'isActive',
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
              Estado <BiSolidSortAlt />
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-black">
              <p>Ordenar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-8 w-8 flex gap-2">
              <span className="flex gap-1 items-center">
                {user.isActive ? 'Activo' : 'No Activo'}
                <BiSolidDownArrow />
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Cambiar estado</DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer"
              disabled={user.isActive}
              onClick={() => {
                if (user.isActive) return;
                actualizarUsuario(user.id, true);
              }}
            >
              Activo
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              disabled={!user.isActive}
              onClick={() => {
                if (!user.isActive) return;
                actualizarUsuario(user.id, false);
              }}
            >
              Desactivar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
