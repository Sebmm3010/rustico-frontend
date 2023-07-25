import { IAdminUsers } from '@/interfaces';
import { ColumnDef } from '@tanstack/react-table';

export const usersColumns: ColumnDef<IAdminUsers>[] = [
  {
    accessorKey: 'id',
    header: 'Id'
  },
  {
    accessorKey: 'fullName',
    header: 'Nombre'
  },
  {
    accessorKey: 'userName',
    header: 'Usuario'
  },
  {
    accessorKey: 'roles',
    header: 'Roles'
  },
  {
    accessorKey: 'isActive',
    header: 'Estado'
  }
];
