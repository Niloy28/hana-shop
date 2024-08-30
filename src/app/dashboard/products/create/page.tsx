import { createProduct } from "@/app/actions";
import ProductForm from "@/components/dashboard/products/ProductForm";

const ProductCreatePage = () => {
  return <ProductForm formAction={createProduct} />;
};

export default ProductCreatePage;
