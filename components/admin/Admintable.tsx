import { FC } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { IAdminUsers } from '@/interfaces';
import { DataTable } from '.';

interface Props {
  columns: ColumnDef<IAdminUsers>[];
  data: any;
}
export const Admintable: FC<Props> = ({ columns, data }) => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
