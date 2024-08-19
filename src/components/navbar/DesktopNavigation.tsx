"use client";

import React from "react";

import NavBarLink from "./NavBarLink";
import { LinkData } from "@/types/link-data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DesktopNavigation = ({
	links,
}: Readonly<{
	links: LinkData[];
}>) => {
	const pathName = usePathname();

	return (
		<ul className="hidden md:flex md:text-sm justify-evenly uppercase">
			{links.map((link) => (
				<NavBarLink
					key={link.name}
					href={link.href}
					className={cn(
						link.href === pathName
							? "text-foreground"
							: "text-muted-foreground hover:text-foreground"
					)}
				>
					{link.name}
				</NavBarLink>
			))}
		</ul>
	);
};

export default DesktopNavigation;
