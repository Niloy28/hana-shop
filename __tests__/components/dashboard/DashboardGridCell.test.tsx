import DashboardGridCell from "@/components/dashboard/DashboardGridCell";
import { render, screen } from "@testing-library/react";
import { TestTubeIcon } from "lucide-react";

describe("Logo", () => {
  const mockTitle = "Title";
  const mockContent = {
    head: "Head",
    body: "Body",
  };
  const mockIcon = <TestTubeIcon />;

  it("should render a title", () => {
    render(
      <DashboardGridCell
        title={mockTitle}
        content={mockContent}
        icon={mockIcon}
      />,
    );

    const logoText = screen.getByText(mockTitle);

    expect(logoText).toBeInTheDocument();
  });

  it("should render an icon", () => {
    render(
      <DashboardGridCell
        title={mockTitle}
        content={mockContent}
        icon={mockIcon}
      />,
    );

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });

  it("should render a content", () => {
    render(
      <DashboardGridCell
        title={mockTitle}
        content={mockContent}
        icon={mockIcon}
      />,
    );

    const content = screen.getAllByRole("paragraph");

    expect(content.length).toBe(2);
    expect(content[0]).toHaveTextContent(mockContent.head);
    expect(content[1]).toHaveTextContent(mockContent.body);
  });
});
