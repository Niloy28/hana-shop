import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardGridCell = ({
	title,
	content,
	icon,
	iconClassName,
}: Readonly<{
	title: string;
	content: {
		head: string;
		body: string;
	};
	icon: React.ReactNode;
	iconClassName?: string;
}>) => {
	return (
		<Card className="bg-secondary">
			<CardHeader className="flex flex-row items-center justify-between pb-2">
				<CardTitle>{title}</CardTitle>
				<div className={`w-6 h-6 ${iconClassName}`}>{icon}</div>
			</CardHeader>
			<CardContent>
				<p className="text-2xl font-bold pb-2">{content.head}</p>
				<p className="text-secondary-foreground text-sm capitalize">
					{content.body}
				</p>
			</CardContent>
		</Card>
	);
};

export default DashboardGridCell;
