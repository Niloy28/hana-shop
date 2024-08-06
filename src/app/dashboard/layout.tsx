import React from "react";

import { LinkData } from "@/types/link-data";
import NavBar from "@/components/navbar/NavBar";

const dashboardLinks: LinkData[] = [
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

const DashboardLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<header>
				<NavBar links={dashboardLinks} />
			</header>
			<div className="flex flex-col w-full container">
				<main>{children}</main>
			</div>
		</>
	);
};

export default DashboardLayout;
