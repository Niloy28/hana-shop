"use client";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { CircleUser } from "lucide-react";
import Link from "next/link";
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
  isLoggedIn,
  isAdmin,
}: Readonly<{
  isLoggedIn: boolean;
  isAdmin: boolean;
}>) => {
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
        {!isLoggedIn && (
          <>
            <DropdownMenuItem>
              <LoginLink className="w-full">Sign In</LoginLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Create Account</RegisterLink>
            </DropdownMenuItem>
          </>
        )}
        {isAdmin && (
          <DropdownMenuItem>
            <Link className="w-full" href="/dashboard">
              Dashboard
            </Link>
          </DropdownMenuItem>
        )}
        {isLoggedIn && (
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
