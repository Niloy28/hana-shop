import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DashboardSalesRecord from "./DashboardSalesRecord";

const DashboardSalesSummary = () => {
	return (
		<Card className="flex flex-col gap-4">
			<CardHeader>
				<CardTitle>Recent Sales</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-2">
				<DashboardSalesRecord />
				<DashboardSalesRecord />
			</CardContent>
		</Card>
	);
};

export default DashboardSalesSummary;
