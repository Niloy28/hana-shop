import { createProduct } from "@/app/actions/productActions";
import ProductForm from "@/components/dashboard/products/ProductForm";

const ProductCreatePage = () => {
  return <ProductForm formAction={createProduct} />;
};

export default ProductCreatePage;
