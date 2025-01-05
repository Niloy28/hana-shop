import { deleteProduct } from "@/app/actions/productActions";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/db";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const id = (await params).id;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return {
    title: `Delete ${product!.name} | Hana Shop (花屋)`,
    description: `Delete ${product!.name}`,
  };
};

const ProductDeletePage = async ({ params }: Props) => {
  const id = (await params).id;

  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <Card className="m-auto w-1/2 max-w-xl">
        <CardHeader className="text-3xl text-red-500">Are you sure?</CardHeader>
        <CardContent>
          <CardDescription>
            This will permanently delete this product from the list.{" "}
            <b>This action cannot be undone.</b>
          </CardDescription>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button variant="outline">
            <Link href="/dashboard/products">Cancel</Link>
          </Button>
          <form action={deleteProduct}>
            <Input type="hidden" name="productID" value={id} />
            <SubmitButton variant="destructive">Delete</SubmitButton>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDeletePage;
