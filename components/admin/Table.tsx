import { useState } from 'react';

import { useRouter } from 'next/router';

import { IoReturnUpBack, IoReturnUpForwardOutline } from 'react-icons/io5';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table';

import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/shadcnComponents';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterValue: string;
  filterBy: string;
  createNew: boolean;
  url?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterValue,
  filterBy,
  createNew,
  url
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    state: {
      sorting,
      columnFilters
    }
  });
  return (
    <>
      <div className="flex items-center py-4 justify-between">
        <Input
          className="p-2 border-black max-w-[35%]"
          placeholder={`Filtrar por ${filterValue}`}
          value={table.getColumn(filterBy)?.getFilterValue() as string}
          onChange={({ target }) =>
            table.getColumn(filterBy)?.setFilterValue(target.value)
          }
        />
        {createNew && url && (
          <div className="flex justify-end">
            <button
              className="bg-blue-600 text-white font-bold px-3 rounded-md my-2"
              onClick={() => router.push(url)}
            >
              + Crear
            </button>
          </div>
        )}
      </div>
      <div className="rounded-md bg-gray-200 p-3 border border-black text-xl">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            className="border-black cursor-pointer"
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <IoReturnUpBack />
          </Button>
          <Button
            className="border-black cursor-pointer"
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <IoReturnUpForwardOutline />
          </Button>
        </div>
      </div>
    </>
  );
}
