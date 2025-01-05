import { createProduct } from "@/app/actions/productActions";
import ProductForm from "@/components/dashboard/products/ProductForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Product | Hana Shop (花屋)",
  description: "Create new product",
};

const ProductCreatePage = () => {
  return <ProductForm formAction={createProduct} />;
};

export default ProductCreatePage;
