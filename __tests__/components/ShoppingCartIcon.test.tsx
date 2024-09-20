import ShoppingCartIcon from "@/components/ShoppingCartIcon";
import { render, screen } from "@testing-library/react";

describe("ShoppingCartIcon", () => {
  it("should render a shopping cart logo", () => {
    render(<ShoppingCartIcon />);

    const cartLogo = screen.getByTestId("shopping-cart");

    expect(cartLogo).toBeInTheDocument();
  });

  it("should render a link", () => {
    render(<ShoppingCartIcon />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
});
