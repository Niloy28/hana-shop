import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const InfoPageTemplate = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="m-4 p-2">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default InfoPageTemplate;
