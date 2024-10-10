import LoadingProductCard from "@/components/products/LoadingProductCard";
import { randomUUID } from "crypto";

const ProductLoadingPage = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {[...Array(10)].map((_) => (
        <LoadingProductCard key={randomUUID()} />
      ))}
    </div>
  );
};

export default ProductLoadingPage;
