import ProductCard from "@/components/products/ProductCard";
import { Product } from "@prisma/client";
import { render, screen } from "@testing-library/react";

describe("ProductCard", () => {
  const mockProduct: Product = {
    id: "1",
    name: "test",
    description: "test description",
    category: "Single",
    images: [],
    isFeatured: true,
    price: 100.0,
    productStatus: "Active",
    createdAt: new Date(),
  };

  test("should render a product name", () => {
    render(<ProductCard product={mockProduct} />);

    const name = screen.getByText(mockProduct.name);

    expect(name).toBeInTheDocument();
  });

  test("should render a product description", () => {
    render(<ProductCard product={mockProduct} />);

    const description = screen.getByText(mockProduct.description);

    expect(description).toBeInTheDocument();
  });
});
