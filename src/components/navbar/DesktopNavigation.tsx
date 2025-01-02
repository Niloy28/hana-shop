"use client";

import { cn } from "@/lib/utils";
import { LinkData } from "@/types/link-data";
import { usePathname } from "next/navigation";
import NavBarLink from "./NavBarLink";

const DesktopNavigation = ({
  links,
}: Readonly<{
  links: LinkData[];
}>) => {
  const pathName = usePathname();

  return (
    <ul className="hidden justify-evenly capitalize md:flex md:text-sm">
      {links.map((link) => (
        <NavBarLink
          key={link.name}
          href={link.href}
          className={cn(
            link.href === pathName
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {link.name}
        </NavBarLink>
      ))}
    </ul>
  );
};

export default DesktopNavigation;
