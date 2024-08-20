import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const DashboardTransactionSummary = () => {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>Recent store transactions</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default DashboardTransactionSummary;
