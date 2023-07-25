import { FC } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { IAdminUsers } from '@/interfaces';
import { DataTable } from '.';

interface Props {
  columns: ColumnDef<IAdminUsers>[];
  data: any;
}
export const AdminTable: FC<Props> = ({ columns, data }) => {
  return <DataTable columns={columns} data={data} />;
};
