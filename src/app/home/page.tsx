import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="mx-12 my-8 grid grid-flow-col content-center justify-items-center gap-2 p-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
