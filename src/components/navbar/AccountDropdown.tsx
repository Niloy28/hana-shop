"use client";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
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
  isAdmin,
}: Readonly<{
  authUser: KindeUser | null;
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
          {authUser ? (
            <Avatar>
              <AvatarImage src={authUser.picture ?? undefined} />
              <AvatarFallback>
                {`https://avatar.vercel.sh/${authUser.email}`}
              </AvatarFallback>
            </Avatar>
          ) : (
            <CircleUser className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {authUser && (
          <>
            <DropdownMenuLabel>
              {`${authUser.given_name} ${authUser.family_name}`}
            </DropdownMenuLabel>
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              {authUser.email}
            </DropdownMenuLabel>
          </>
        )}
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
        {isAdmin && (
          <DropdownMenuItem>
            <Link className="w-full" href="/dashboard">
              Dashboard
            </Link>
          </DropdownMenuItem>
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
