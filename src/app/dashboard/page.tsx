import React from "react";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import DashboardGridCell from "@/components/dashboard/DashboardGridCell";

const DashboardPage = () => {
	return (
		<div className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-4">
			<DashboardGridCell
				title="Total Revenue"
				content={{ head: "$100,000", body: "Based on 100 Charges" }}
				icon={<DollarSign />}
				iconClassName="text-green-500"
			/>
			<DashboardGridCell
				title="Total Sales"
				content={{ head: "+42", body: "Total sold units" }}
				icon={<ShoppingBag />}
				iconClassName="text-blue-500"
			/>
			<DashboardGridCell
				title="Total SKUs"
				content={{ head: "6", body: "Total products available" }}
				icon={<PartyPopper />}
				iconClassName="text-indigo-500"
			/>
			<DashboardGridCell
				title="Total Users"
				content={{ head: "4", body: "Total users" }}
				icon={<User2 />}
				iconClassName="text-pink-500"
			/>
		</div>
	);
};

export default DashboardPage;
