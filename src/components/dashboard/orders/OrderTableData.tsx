import { TableCell, TableRow } from "@/components/ui/table";
import { toCurrencyString } from "@/lib/utils";
import { OrderStatus, OrderType } from "@/types/order-data";

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
  status: typeof OrderStatus;
  date: Date;
  amount: number;
}>) => {
  return (
    <TableRow>
      <TableCell>
        <p className="font-medium">{customerName}</p>
        <p className="hidden text-sm text-muted-foreground md:flex">
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
