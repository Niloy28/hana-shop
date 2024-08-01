import React from "react";

const NavBarLink = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<li className="hover:bg-slate-800 flex space-2 items-center justify-center px-4 py-2 mx-4 rounded-lg shadow-md cursor-pointer">
			{children}
		</li>
	);
};

export default NavBarLink;
