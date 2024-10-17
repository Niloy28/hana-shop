import LoadingProductCard from "@/components/products/LoadingProductCard";
import { randomUUID } from "crypto";

const ProductLoadingPage = async () => {
  return (
    <div className="mx-2 mt-10 grid gap-4 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(10)].map((_) => (
        <LoadingProductCard key={randomUUID()} />
      ))}
    </div>
  );
};

export default ProductLoadingPage;
