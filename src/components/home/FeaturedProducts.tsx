import prisma from "@/lib/db";
import Link from "next/link";
import ProductCard from "../products/ProductCard";

const FeaturedProducts = async () => {
  const featuredProducts = await prisma.product.findMany({
    orderBy: {
      createdAt: "asc",
    },
    where: {
      isFeatured: true,
    },
    take: 4,
  });

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold capitalize tracking-tight">
          Shop Featured Products
        </h2>
        <Link href="/products/featured" className="hover:opacity-80">
          Browse All
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6 lg:gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
