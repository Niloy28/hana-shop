import ProductCard from "@/components/products/ProductCard";
import prisma from "@/lib/db";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Category } from "@prisma/client";

type Props = {
  params: Promise<{ category: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const category = (await params).category;

  return {
    title: `${capitalizeFirstLetter(category)} Flowers | Hana Shop (花屋)`,
    description: `Products from ${category} category`,
  };
};

export default async function ProductCategoryPage({
  params,
}: Readonly<{
  params: { category: string };
}>) {
  const products = await prisma.product.findMany({
    where: {
      category:
        Category[
          capitalizeFirstLetter(params.category) as keyof typeof Category
        ],
    },
  });

  return (
    <div className="m-2 p-8">
      <h2 className="mb-2 text-2xl font-bold capitalize tracking-tight">
        Shop for {params.category} flowers
      </h2>
      {products.length > 0 && (
        <div className="grid grid-cols-6 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {products.length === 0 && (
        <p className="m-auto pt-10 text-center text-2xl text-muted-foreground">
          No products found in this category
        </p>
      )}
    </div>
  );
}
