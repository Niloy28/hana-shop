import OrderTableData from "@/components/dashboard/orders/OrderTableData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderStatus } from "@/types/order-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders | Hana Shop (花屋)",
  description: "Manage customer orders",
};

const OrdersPage = () => {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription className="capitalize">
          Recent orders from store
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <OrderTableData
              customerName="Niloy"
              customerMail="test@test.com"
              type="Sale"
              status={OrderStatus.Done}
              date={new Date()}
              amount={2500}
            />
            <OrderTableData
              customerName="Prithu"
              customerMail="test@test.com"
              type="Sale"
              status={OrderStatus.Pending}
              date={new Date()}
              amount={1200}
            />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersPage;
