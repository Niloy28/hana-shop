import React from "react";

import { Avatar, AvatarFallback } from "../ui/avatar";

const DashboardSalesRecord = () => {
	return (
		<div className="flex w-full justify-between items-center">
			<div className="flex gap-1 items-center">
				<Avatar className="hidden sm:flex w-8 h-8">
					<AvatarFallback>FI</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-1">
					<p className="text-sm font-medium">Niloy</p>
					<p className="text-sm text-secondary-foreground">test@test.com</p>
				</div>
			</div>
			<p className="text-lg font-semibold">+$499.99</p>
		</div>
	);
};

export default DashboardSalesRecord;
