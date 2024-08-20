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
        <div className={`h-6 w-6 ${iconClassName}`}>{icon}</div>
      </CardHeader>
      <CardContent>
        <p className="pb-2 text-2xl font-bold">{content.head}</p>
        <p className="text-sm capitalize text-secondary-foreground">
          {content.body}
        </p>
      </CardContent>
    </Card>
  );
};

export default DashboardGridCell;
