import { BiSolidSortAlt, BiSolidDownArrow } from 'react-icons/bi';
import { ColumnDef } from '@tanstack/react-table';
import { IAdminUsers } from '@/interfaces';
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

export const usersColumns: ColumnDef<IAdminUsers>[] = [
  {
    accessorKey: 'id',
    header: 'Id'
  },
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
              onClick={() => console.log('activo')}
            >
              Activo
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => console.log('Inactivo')}
            >
              Desactivar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
