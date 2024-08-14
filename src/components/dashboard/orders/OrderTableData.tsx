import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { OrderStatus, OrderType } from "@/types/order-data";
import { toCurrencyString } from "@/lib/utils";

const OrderTableData = ({
	customerName,
	customerMail,
	type,
	status,
	date,
	amount,
}: Readonly<{
	customerName: string;
	customerMail: string;
	type: OrderType;
	status: OrderStatus;
	date: Date;
	amount: number;
}>) => {
	return (
		<TableRow>
			<TableCell>
				<p className="font-medium">{customerName}</p>
				<p className="hidden md:flex text-sm text-muted-foreground">
					{customerMail}
				</p>
			</TableCell>
			<TableCell>{type}</TableCell>
			<TableCell>{status}</TableCell>
			<TableCell>{date.toLocaleDateString()}</TableCell>
			<TableCell className="text-right">{toCurrencyString(amount)}</TableCell>
		</TableRow>
	);
};

export default OrderTableData;
