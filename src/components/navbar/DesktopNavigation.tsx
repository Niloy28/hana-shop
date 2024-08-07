import React from "react";

import NavBarLink from "./NavBarLink";
import { LinkData } from "@/types/link-data";

const DesktopNavigation = ({
	links,
}: Readonly<{
	links: LinkData[];
}>) => {
	return (
		<ul className="hidden md:flex md:text-sm justify-evenly uppercase">
			{links.map((link) => (
				<NavBarLink
					key={link.name}
					href={link.href}
					className="hover:bg-slate-800"
				>
					{link.name}
				</NavBarLink>
			))}
		</ul>
	);
};

export default DesktopNavigation;
