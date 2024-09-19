import ProductCard from "@/components/products/ProductCard";
import prisma from "@/lib/db";

const FeaturedProductsPage = async () => {
  const featuredProducts = await prisma.product.findMany({
    where: {
      isFeatured: true,
    },
  });

  return (
    <div className="m-2 p-8">
      <div className="grid grid-cols-6 gap-2">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsPage;
