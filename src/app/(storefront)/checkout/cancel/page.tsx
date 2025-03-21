import { Button } from "@/components/ui/button";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const CheckoutCancelPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-lg p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold">Order Cancelled</h1>
        <p className="mt-4 text-center">
          Your order has been cancelled. If you have any questions, please
          contact our support team.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-2">
          <Button className="rounded-md bg-red-500 px-4 py-2 hover:bg-red-700">
            <Link href="/products">
              <div className="flex justify-center gap-2">
                <ShoppingBagIcon />
                <p>Return to Shopping</p>
              </div>
            </Link>
          </Button>
          <Button className="rounded-md bg-primary px-4 py-2">
            <Link href="/cart">
              <div className="flex justify-center gap-2">
                <ShoppingCartIcon />
                <p>View Cart</p>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCancelPage;
