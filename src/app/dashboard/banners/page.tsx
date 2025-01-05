import BannerTableData from "@/components/dashboard/banners/BannerTableData";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import { PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Banners | Hana Shop (花屋)",
  description: "Manage site banners",
};

const BannersPage = async () => {
  const banners = await prisma.banner.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/banners/create">
            <PlusCircle className="h-5 w-5" />
            <span className="capitalize">Add Banner</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Banners</CardTitle>
          <CardDescription className="capitalize">
            Manage store banners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Banner</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {banners.map((banner) => (
                <BannerTableData key={banner.id} banner={banner} />
              ))}
            </TableBody>
          </Table>
          {banners.length === 0 ? (
            <div className="mt-4 text-center text-xl text-muted-foreground">
              No banners were found
            </div>
          ) : (
            <></>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default BannersPage;
