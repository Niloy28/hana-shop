import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = ({
  cartTotal,
}: Readonly<{ cartTotal: number | null }>) => {
  return (
    <div className="m-auto mr-2 h-10 w-10 cursor-pointer rounded-full border p-2 text-center text-gray-500 hover:text-gray-600">
      <Link href="/cart">
        <ShoppingCart data-testid="shopping-cart" className="h-5 w-5" />
        {cartTotal !== null && cartTotal > 0 && (
          <p className="relative -right-2 bottom-4 m-auto rounded-full bg-black p-0.5 text-[10px] font-medium text-white">
            {cartTotal}
          </p>
        )}
      </Link>
    </div>
  );
};

export default ShoppingCartIcon;
