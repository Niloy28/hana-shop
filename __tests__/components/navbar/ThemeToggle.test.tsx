import ThemeToggle from "@/components/navbar/ThemeToggle";
import { render, screen } from "@testing-library/react";

describe("ThemeToggle", () => {
  it("should render a Moon Icon", () => {
    render(<ThemeToggle />);

    const moon = screen.getByTestId("moonIcon");

    expect(moon).toBeInTheDocument();
  });

  it("should render a Sun Icon", () => {
    render(<ThemeToggle />);

    const sun = screen.getByTestId("sunIcon");

    expect(sun).toBeInTheDocument();
  });
});
