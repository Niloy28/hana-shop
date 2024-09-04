import DesktopNavigation from "@/components/navbar/DesktopNavigation";
import { LinkData } from "@/types/link-data";
import { render, screen } from "@testing-library/react";

describe("DesktopNavigation", () => {
  const mockLinkData: LinkData[] = [
    { name: "test", href: "test" },
    { name: "test2", href: "test2" },
  ];

  it("should render a unordered list", () => {
    render(<DesktopNavigation links={mockLinkData} />);

    const ul = screen.getByRole("list");

    expect(ul).toBeInTheDocument();
  });

  it("should render list items", () => {
    render(<DesktopNavigation links={mockLinkData} />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems.length).toBeGreaterThan(0);
  });

  it("should render names in the list items", () => {
    render(<DesktopNavigation links={mockLinkData} />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems[0]).toHaveTextContent("test");
    expect(listItems[1]).toHaveTextContent("test2");
  });
});
