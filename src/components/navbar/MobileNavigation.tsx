"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

// User Imports
import { LinkData } from "@/types/link-data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import NavBarLink from "./NavBarLink";

const MobileNavigation = ({
  links,
}: Readonly<{
  links: LinkData[];
}>) => {
  const pathName = usePathname();

  return (
    <div className="mr-2 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              {links.map((link) => (
                <NavBarLink
                  type="span"
                  key={link.name}
                  href={link.href}
                  className={cn(
                    link.href === pathName
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                    "w-full",
                  )}
                >
                  {link.name}
                </NavBarLink>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
