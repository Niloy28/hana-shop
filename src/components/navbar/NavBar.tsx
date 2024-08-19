import React from "react";
import Link from "next/link";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

// User Imports
import Logo from "../Logo";
import { LinkData } from "@/types/link-data";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import AccountDropdown from "./AccountDropdown";

const NavBar = ({
	links,
	authUser,
}: Readonly<{
	links: LinkData[];
	authUser: KindeUser | null;
}>) => {
	return (
		<nav className="mx-4 my-2 px-4 py-2 rounded-full sticky outline-1 outline">
			<div className="w-full flex flex-1 items-center justify-between">
				<Link className="px-4 ml-4" href="/home">
					<Logo />
				</Link>
				<div className="flex space-2">
					<DesktopNavigation links={links} />

					<MobileNavigation links={links} />
					<AccountDropdown authUser={authUser} />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
