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
import { Banner } from "@prisma/client";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BannerTableData = ({
  banner,
}: Readonly<{
  banner: Banner;
}>) => {
  return (
    <TableRow>
      <TableCell>
        <Image
          src={banner.source}
          width={100}
          height={100}
          alt="Banner Image"
          className="h-32 w-56 rounded-md object-cover"
        />
      </TableCell>
      <TableCell className="capitalize">{banner.title}</TableCell>
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
              <Link href={`/dashboard/banners/${banner.id}/edit`}>
                <span className="flex gap-x-2">
                  <Pencil />
                  <p>Edit</p>
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              <Link href={`/dashboard/banners/${banner.id}/delete`}>
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

export default BannerTableData;
