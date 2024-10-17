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
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsPage;
