import ProductCard from "@/components/products/ProductCard";
import prisma from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products | Hana Shop (花屋)",
  description: "All available products",
};

const ProductsPage = async () => {
  const products = await prisma.product.findMany({
    where: {
      OR: [{ productStatus: "Active" }, { productStatus: "Out_Of_Stock" }],
    },
  });

  return (
    <div className="m-2 p-8">
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
