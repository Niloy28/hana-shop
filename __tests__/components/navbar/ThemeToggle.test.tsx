import "@/lib/mocks";

import ThemeToggle from "@/components/navbar/ThemeToggle";
import { renderWithThemeContext } from "@/lib/test-utils";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTheme } from "next-themes";

type ThemeVariant = "light" | "dark" | "system";

const ThemeSpy = () => {
  const { theme } = useTheme();
  return <span data-testid="theme-spy">{theme}</span>;
};

// Add a setup function to render the button & toggle button with a specific theme
const setup = (theme: ThemeVariant | undefined = "dark") => {
  renderWithThemeContext(
    <>
      <ThemeSpy />
      <ThemeToggle />
    </>,
    { theme },
  );
  const spy = screen.getByTestId("theme-spy");

  const toggle = screen.getByTestId("toggle");
  return { toggle, spy };
};

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

  it("should toggle the theme to dark", async () => {
    const { toggle, spy } = setup("light");
    await userEvent.click(toggle);
    expect(spy).toHaveTextContent("dark");
  });

  it("should toggle the theme to light", async () => {
    const { toggle, spy } = setup("dark");
    await userEvent.click(toggle);
    expect(spy).toHaveTextContent("light");
  });
});
