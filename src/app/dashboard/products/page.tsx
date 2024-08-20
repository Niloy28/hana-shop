import ProductTableData from "@/components/dashboard/products/ProductTableData";
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
import { PlusCircle, User2Icon, UserIcon } from "lucide-react";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/products/create">
            <PlusCircle className="h-5 w-5" />
            <span className="capitalize">Add Product</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription className="capitalize">
            Manage store products
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <ProductTableData
                key="Macbook"
                image={<UserIcon />}
                name="Macbook"
                status="Active"
                date={new Date()}
                price={2999}
              />
              <ProductTableData
                key="Nike Air"
                image={<User2Icon />}
                name="Nike Air"
                status="Active"
                date={new Date()}
                price={299}
              />
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductsPage;
