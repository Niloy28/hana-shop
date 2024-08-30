import { updateProduct } from "@/app/actions";
import ProductForm from "@/components/dashboard/products/ProductForm";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const ProductEditPage = async ({
  params,
}: Readonly<{
  params: { id: string };
}>) => {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ProductForm product={product} formAction={updateProduct} />;
};

export default ProductEditPage;
