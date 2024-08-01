import React from "react";
import Logo from "@/../public/Design.png";
import Image from "next/image";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
	return (
		<nav className="mx-4 my-2 px-4 py-2 rounded-full sticky text-white bg-slate-900">
			<ul className="flex justify-evenly uppercase">
				<NavBarLink>
					<Image src={Logo} alt="Shop logo" width={40} height={40} /> Hana Shop
					(花屋)
				</NavBarLink>
				<NavBarLink>Home</NavBarLink>
				<NavBarLink>About</NavBarLink>
				<NavBarLink>Bouquets</NavBarLink>
				<NavBarLink>Blog</NavBarLink>
				<NavBarLink>Contact</NavBarLink>
				<NavBarLink>Sign In</NavBarLink>
			</ul>
		</nav>
	);
};

export default NavBar;
