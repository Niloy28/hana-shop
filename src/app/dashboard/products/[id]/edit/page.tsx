import { updateProduct } from "@/app/actions/productActions";
import ProductForm from "@/components/dashboard/products/ProductForm";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

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
    title: `Edit ${product!.name} | Hana Shop (花屋)`,
    description: `Edit ${product!.name}`,
  };
};

const ProductEditPage = async ({ params }: Props) => {
  const id = (await params).id;
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ProductForm product={product} formAction={updateProduct} />;
};

export default ProductEditPage;
