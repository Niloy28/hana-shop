import React from "react";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { toCurrencyString } from "@/lib/utils";

const DashboardSalesRecord = ({
	avatar,
	customerName,
	customerMail,
	amount,
}: Readonly<{
	avatar: {
		profile: string;
		fallback: string;
	};
	customerName: string;
	customerMail: string;
	amount: number;
}>) => {
	return (
		<div className="flex w-full justify-between items-center">
			<div className="flex gap-1 items-center">
				<Avatar className="hidden sm:flex w-8 h-8">
					<AvatarFallback>{avatar.fallback}</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-1">
					<p className="text-sm font-medium">{customerName}</p>
					<p className="text-sm text-secondary-foreground">{customerMail}</p>
				</div>
			</div>
			<p className="text-lg font-semibold">+{toCurrencyString(amount)}</p>
		</div>
	);
};

export default DashboardSalesRecord;
