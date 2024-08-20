import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { toCurrencyString } from "@/lib/utils";
import { ProductStatus } from "@/types/product-data";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import React from "react";

const ProductTableData = ({
  image,
  name,
  status,
  price,
  date,
}: Readonly<{
  image: string | React.ReactNode;
  name: string;
  status: ProductStatus;
  price: number;
  date: Date;
}>) => {
  return (
    <TableRow>
      <TableCell>{image}</TableCell>
      <TableCell className="capitalize">{name}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>{toCurrencyString(price)}</TableCell>
      <TableCell>{date.toLocaleDateString()}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span className="flex gap-x-2">
                <Pencil />
                <p>Edit</p>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="flex gap-x-2">
                <Trash2 className="text-red-500" />
                <p>Delete</p>
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default ProductTableData;
