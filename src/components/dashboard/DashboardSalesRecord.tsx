import { toCurrencyString } from "@/lib/utils";
import { Avatar, AvatarFallback } from "../ui/avatar";

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
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-1">
        <Avatar className="hidden h-8 w-8 sm:flex">
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
