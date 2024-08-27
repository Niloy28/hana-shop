import AccountDropdown from "@/components/navbar/AccountDropdown";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("AccountDropdown", () => {
  const mockUser: KindeUser = {
    id: "1",
    email: "",
    given_name: "",
    family_name: "",
    picture: "",
  };
  it("should render a menu button", () => {
    render(<AccountDropdown authUser={mockUser} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render account menu when button is clicked", async () => {
    render(<AccountDropdown authUser={mockUser} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const menuItem = await screen.findByText("Account");

    expect(menuItem).toBeInTheDocument();
  });

  it("should render sign in and register button when button is clicked while not logged in", async () => {
    render(<AccountDropdown authUser={null} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const signIn = await screen.findByText("Sign In");
    const register = await screen.findByText("Create Account");

    expect(signIn).toBeInTheDocument();
    expect(register).toBeInTheDocument();
  });

  it("should render sign out button when button is clicked while logged in", async () => {
    render(<AccountDropdown authUser={mockUser} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));

    const logout = await screen.findByText("Logout");

    expect(logout).toBeInTheDocument();
  });
});
