"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type InventoryItem = {
  id: string;
  name: string;
  category: string;
  sku: string;
  stock: number;
  price: string;
  threshold: number;
  status: "in-stock" | "low-stock" | "out-of-stock" | "on-order";
};

const data: InventoryItem[] = [
  {
    id: "INV001",
    name: "Acrylic Sheet - Clear 5mm",
    category: "Raw Materials",
    sku: "RM-ACR-C5",
    stock: 234,
    price: "$25.50",
    threshold: 100,
    status: "in-stock",
  },
  {
    id: "INV002",
    name: "Glass Panels - 10x10cm",
    category: "Components",
    sku: "COM-GP-10",
    stock: 78,
    price: "$12.75",
    threshold: 50,
    status: "in-stock",
  },
  {
    id: "INV003",
    name: "LED Strip Lights - White",
    category: "Components",
    sku: "COM-LED-W",
    stock: 45,
    price: "$7.25",
    threshold: 30,
    status: "low-stock",
  },
  {
    id: "INV004",
    name: "Metal Frame Connectors",
    category: "Components",
    sku: "COM-MFC-01",
    stock: 18,
    price: "$3.99",
    threshold: 25,
    status: "low-stock",
  },
  {
    id: "INV005",
    name: "Dust-proof Seals",
    category: "Components",
    sku: "COM-DPS-01",
    stock: 156,
    price: "$2.50",
    threshold: 50,
    status: "in-stock",
  },
  {
    id: "INV006",
    name: "Basic Display Case - Medium",
    category: "Finished Products",
    sku: "PRD-BDC-M",
    stock: 12,
    price: "$45.99",
    threshold: 10,
    status: "low-stock",
  },
  {
    id: "INV007",
    name: "Premium LED Display Cabinet",
    category: "Finished Products",
    sku: "PRD-LDC-P",
    stock: 0,
    price: "$129.99",
    threshold: 5,
    status: "out-of-stock",
  },
  {
    id: "INV008",
    name: "Stackable Cube Display",
    category: "Finished Products",
    sku: "PRD-SCD-01",
    stock: 27,
    price: "$35.50",
    threshold: 15,
    status: "in-stock",
  },
  {
    id: "INV009",
    name: "Wall-mounted Display Shelf",
    category: "Finished Products",
    sku: "PRD-WDS-01",
    stock: 8,
    price: "$65.00",
    threshold: 10,
    status: "low-stock",
  },
  {
    id: "INV010",
    name: "Custom Figure Stand - Clear",
    category: "Finished Products",
    sku: "PRD-CFS-C",
    stock: 0,
    price: "$18.75",
    threshold: 20,
    status: "on-order",
  },
];

export const columns: ColumnDef<InventoryItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "sku",
    header: "SKU",
    cell: ({ row }) => <div>{row.getValue("sku")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent"
        >
          Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-right">{row.getValue("stock")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent"
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-right">{row.getValue("price")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant="outline"
          className={cn(
            "capitalize",
            status === "in-stock" && "border-green-500 text-green-500",
            status === "low-stock" && "border-yellow-500 text-yellow-500",
            status === "out-of-stock" && "border-red-500 text-red-500",
            status === "on-order" && "border-blue-500 text-blue-500"
          )}
        >
          {status.replace("-", " ")}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(item.id)}>
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit item</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Create order</DropdownMenuItem>
            <DropdownMenuItem>Adjust stock</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Delete item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function InventoryList() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
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
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}