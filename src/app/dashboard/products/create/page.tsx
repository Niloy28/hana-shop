import { createProduct } from "@/app/actions";
import ProductForm from "@/components/dashboard/products/ProductForm";

const CreateProductPage = () => {
  return <ProductForm formAction={createProduct} />;
};

export default CreateProductPage;
