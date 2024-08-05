import Link from "next/link";
import React from "react";
import NavBarLink from "../navbar/NavBarLink";

const links = [
	{
		name: "Summary",
		href: "/dashboard",
	},
	{
		name: "Order",
		href: "/dashboard/orders",
	},
	{
		name: "Products",
		href: "/dashboard/products",
	},
	{
		name: "Categories",
		href: "/dashboard/categories",
	},
];

const DashboardNavBar = () => {
	return (
		<nav className="mx-4 my-2 px-4 py-2 rounded-full sticky text-white bg-slate-900">
			<ul className="flex justify-evenly uppercase">
				{links.map((link) => (
					<NavBarLink key={link.name}>
						<Link href={link.href}>{link.name}</Link>
					</NavBarLink>
				))}
			</ul>
		</nav>
	);
};

export default DashboardNavBar;
