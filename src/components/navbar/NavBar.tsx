"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

import Logo from "../Logo";
import { LinkData } from "@/types/link-data";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import AccountDropdown from "./AccountDropdown";
import { MoonIcon, SunIcon, ToggleLeftIcon } from "lucide-react";
import { Toggle } from "../ui/toggle";

const NavBar = ({
	links,
}: Readonly<{
	links: LinkData[];
}>) => {
	const { setTheme } = useTheme();
	const [themeSetting, setThemeSetting] = useState("light");
	return (
		<nav className="mx-4 my-2 px-4 py-2 rounded-full sticky text-white bg-slate-900">
			<div className="w-full flex flex-1 items-center justify-between">
				<Link className="px-4 ml-4" href="/home">
					<Logo />
				</Link>
				<div className="flex space-2">
					<DesktopNavigation links={links} />

					<MobileNavigation links={links} />
					<AccountDropdown />
				</div>
			</div>
			{/* <div>
				<p>Theme</p>
				<p>
					<SunIcon />
					<Toggle
						onClick={() => {
							themeSetting === "light" ? setTheme("dark") : setTheme("light");
							themeSetting === "light"
								? setThemeSetting("dark")
								: setThemeSetting("light");
						}}
					>
						<ToggleLeftIcon />
					</Toggle>
					<MoonIcon />
				</p>
			</div> */}
		</nav>
	);
};

export default NavBar;
