import ProductCard from "@/components/products/ProductCard";
import prisma from "@/lib/db";

const ProductsPage = async () => {
  const products = await prisma.product.findMany({
    where: {
      OR: [{ productStatus: "Active" }, { productStatus: "Out_Of_Stock" }],
    },
  });

  return (
    <div className="m-2 p-8">
      <div className="grid grid-cols-6 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
