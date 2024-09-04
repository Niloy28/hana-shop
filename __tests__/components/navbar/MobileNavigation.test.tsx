import MobileNavigation from "@/components/navbar/MobileNavigation";
import { LinkData } from "@/types/link-data";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("MobileNavigation", () => {
  const mockLinkData: LinkData[] = [
    { name: "test", href: "test" },
    { name: "test2", href: "test2" },
  ];

  it("should render a menu button", () => {
    render(<MobileNavigation links={mockLinkData} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render nav items when button is clicked", async () => {
    render(<MobileNavigation links={mockLinkData} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const menuItems = await screen.findAllByRole("menuitem");

    expect(menuItems.length).toBeGreaterThan(0);
  });

  it("should render names in the list items when button is clicked", async () => {
    render(<MobileNavigation links={mockLinkData} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const menuItems = await screen.findAllByRole("menuitem");

    expect(menuItems[0]).toHaveTextContent("test");
    expect(menuItems[1]).toHaveTextContent("test2");
  });
});
