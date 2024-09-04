import NavBarLink from "@/components/navbar/NavBarLink";
import { render, screen } from "@testing-library/react";

describe("NavBarLink", () => {
  it("should render a list item", () => {
    render(<NavBarLink href="/test">Test</NavBarLink>);

    const listItem = screen.getByRole("listitem");

    expect(listItem).toBeInTheDocument();
  });

  it("should have text inside a list item", () => {
    render(<NavBarLink href="/test">Test</NavBarLink>);

    const text = screen.getByText("Test");

    expect(text).toBeInTheDocument();
  });

  it("should have a link in the list item", () => {
    render(<NavBarLink href="/test">Test</NavBarLink>);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
});
