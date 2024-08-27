"use client";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { useTheme } from "next-themes";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";

const AccountDropdown = ({
  authUser,
}: Readonly<{
  authUser: KindeUser | null;
}>) => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-10 w-10 rounded-full"
          variant="secondary"
          size="icon"
        >
          <CircleUser className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {!authUser && (
          <>
            <DropdownMenuItem>
              <LoginLink className="w-full">Sign In</LoginLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Create Account</RegisterLink>
            </DropdownMenuItem>
          </>
        )}
        {authUser && (
          <DropdownMenuItem>
            <LogoutLink className="w-full">Logout</LogoutLink>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ThemeToggle />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
