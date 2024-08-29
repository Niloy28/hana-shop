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
import { Product } from "@prisma/client";
import { Check, MoreHorizontal, Pencil, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductTableData = ({
  product,
}: Readonly<{
  product: Product;
}>) => {
  return (
    <TableRow>
      <TableCell>
        <Image
          src={product.images[0]}
          width={100}
          height={100}
          alt="Product Image"
          className="h-16 w-16 rounded-md object-cover"
        />
      </TableCell>
      <TableCell className="capitalize">{product.name}</TableCell>
      <TableCell>
        {product.productStatus.toString().split("_").join(" ")}
      </TableCell>
      <TableCell>{product.category.toString().split("_").join(" ")}</TableCell>
      <TableCell>{toCurrencyString(product.price)}</TableCell>
      <TableCell>{product.createdAt.toLocaleDateString()}</TableCell>
      <TableCell>
        {product.isFeatured ? (
          <Check className="m-auto h-5 w-5" />
        ) : (
          <X className="m-auto h-5 w-5" />
        )}
      </TableCell>
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
            <DropdownMenuItem className="hover:cursor-pointer">
              <Link href={`/dashboard/products/${product.id}/edit`}>
                <span className="flex gap-x-2">
                  <Pencil />
                  <p>Edit</p>
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              <Link href={`/dashboard/products/${product.id}/delete`}>
                <span className="flex gap-x-2">
                  <Trash2 className="text-red-500" />
                  <p>Delete</p>
                </span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default ProductTableData;
