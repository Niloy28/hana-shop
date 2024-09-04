import Logo from "@/components/Logo";
import { render, screen } from "@testing-library/react";

describe("Logo", () => {
  it("should render a logo with 'Hana Shop (花屋)' text", () => {
    render(<Logo />);

    const logoText = screen.getByText("Hana Shop (花屋)");

    expect(logoText).toBeInTheDocument();
  });

  it("should render a logo image", () => {
    render(<Logo />);

    const logoImage = screen.getByRole("img");

    expect(logoImage).toBeInTheDocument();
  });
});
