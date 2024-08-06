import Link from "next/link";
import React from "react";

const NavBarLink = ({
	children,
	href,
}: Readonly<{
	children: React.ReactNode;
	href: string;
}>) => {
	return (
		<li className="hover:bg-slate-800 flex items-center text-lg justify-center px-1 lg:px-4 py-2 mx-1 lg:mx-4 rounded-lg shadow-md cursor-pointer">
			<Link href={href}>{children}</Link>
		</li>
	);
};

export default NavBarLink;
