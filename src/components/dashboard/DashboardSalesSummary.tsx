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
				<DashboardSalesRecord
					avatar={{ profile: "", fallback: "FI" }}
					customerName="Niloy"
					customerMail="test@test.com"
					amount={499.99}
				/>
				<DashboardSalesRecord
					avatar={{ profile: "", fallback: "SS" }}
					customerName="Sakib"
					customerMail="test@test.com"
					amount={299.99}
				/>
			</CardContent>
		</Card>
	);
};

export default DashboardSalesSummary;
