import React from "react";
import Link from "next/link";

import NavBarLink from "./NavBarLink";
import Logo from "../Logo";
import { LinkData } from "@/types/link-data";

const NavBar = ({
	links,
}: Readonly<{
	links: LinkData[];
}>) => {
	return (
		<nav className="mx-4 my-2 px-4 py-2 rounded-full sticky text-white bg-slate-900">
			<div className="w-full flex flex-1 items-center justify-between">
				<Link className="px-4 ml-4" href="/home">
					<Logo />
				</Link>
				<ul className="hidden md:flex md:text-sm justify-evenly uppercase">
					{links.map((link) => (
						<NavBarLink key={link.name} href={link.href}>
							{link.name}
						</NavBarLink>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
