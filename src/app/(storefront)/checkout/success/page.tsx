import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

const CheckoutSuccessPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-green-500">
          Success!
        </h1>
        <p className="mt-4 text-center text-gray-700">
          Your order has been placed successfully.
        </p>
        <div className="mt-6 flex justify-center">
          <Button className="rounded-md bg-green-500 px-4 py-2 text-white">
            <Link href="/products">
              <div className="flex justify-center gap-2">
                <ShoppingBagIcon />
                <p>Continue Shopping</p>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
