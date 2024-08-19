"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

// User Imports
import { LinkData } from "@/types/link-data";
import NavBarLink from "./NavBarLink";

const MobileNavigation = ({
	links,
}: Readonly<{
	links: LinkData[];
}>) => {
	const pathName = usePathname();

	return (
		<div className="md:hidden mr-2">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="secondary" size="icon">
						<MenuIcon className="h-5 w-5" />
					</Button>
				</SheetTrigger>

				<SheetContent side="right">
					<ul className="mt-4 flex flex-col space-2">
						{links.map((link) => (
							<NavBarLink
								key={link.name}
								href={link.href}
								className={cn(
									link.href === pathName
										? "text-foreground"
										: "text-muted-foreground hover:text-foreground",
									"w-full"
								)}
							>
								{link.name}
							</NavBarLink>
						))}
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileNavigation;
