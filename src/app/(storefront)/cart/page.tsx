import CartListItem from "@/components/cart/CartListItem";
import CheckoutButton from "@/components/CheckoutButton";
import { Button } from "@/components/ui/button";
import { redis } from "@/lib/redis";
import { getUserSession } from "@/lib/server-utils";
import { toCurrencyString } from "@/lib/utils";
import { CartData } from "@/types/cart-data";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Cart | Hana Shop (花屋)",
  description: "Confirm your cart contents",
};

const CartPage = async () => {
  let cart: CartData | null = null;
  const user = await getUserSession();

  if (user) {
    cart = await redis.get(`cart-${user.id}`);
  } else {
    const cartCookie = (await cookies()).get("cart");

    if (cartCookie) {
      cart = JSON.parse(cartCookie.value) as CartData;
    }
  }

  const subTotal =
    cart && cart.items.length > 0
      ? cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      : 0;

  return (
    <div className="mx-auto mt-10 flex min-h-[55vh] w-full max-w-2xl items-center justify-center">
      {!cart || cart.items.length === 0 ? (
        <div className="mx-auto flex flex-col items-center justify-center gap-y-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <ShoppingCartIcon className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-center text-2xl font-bold">
            Your shopping cart is empty!
          </h2>
          <p>Add items to your shopping cart now!</p>
          <Link href="/products">
            <Button className="w-full bg-primary">
              <ShoppingBagIcon /> Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4">
          {cart.items.map((item) => (
            <CartListItem key={item.id} item={item} />
          ))}
          <div className="flex items-center justify-between text-lg font-semibold">
            <p>Subtotal:</p>
            <p>{toCurrencyString(subTotal)}</p>
          </div>

          <CheckoutButton amount={subTotal} cartItems={cart.items} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
