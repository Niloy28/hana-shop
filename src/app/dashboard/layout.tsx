import DashboardNavBar from "@/components/dashboard/DashboardNavBar";
import React from "react";

const DashboardLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<header>
				<DashboardNavBar />
			</header>
			<div className="flex flex-col w-full container">
				<main>{children}</main>
			</div>
		</>
	);
};

export default DashboardLayout;
