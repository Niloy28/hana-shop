import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { LinkData } from "@/types/link-data";
import NavBarLink from "./NavBarLink";

const MobileNavigation = ({
	links,
}: Readonly<{
	links: LinkData[];
}>) => {
	return (
		<div className="md:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="secondary" size="icon">
						<MenuIcon className="h-5 w-5" />
					</Button>
				</SheetTrigger>

				<SheetContent side="right">
					<ul className="mt-4 flex flex-col space-2">
						{links.map((link) => (
							<NavBarLink key={link.name} href={link.href} className="w-full">
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
