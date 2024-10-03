import { deleteCartItem } from "@/app/actions/cartActions";
import { Button } from "@/components/ui/button";
import { redis } from "@/lib/redis";
import { toCurrencyString } from "@/lib/utils";
import { CartData } from "@/types/cart-data";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  const cart: CartData | null = await redis.get(`cart-${user.id}`);

  return (
    <div className="mx-auto mt-10 min-h-[55vh] max-w-2xl">
      {!cart || cart.items.length === 0 ? (
        <div className="mx-auto">
          <h1 className="text-center text-2xl font-bold">
            Your shopping cart is empty!
          </h1>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4">
          {cart.items.map((item) => (
            <div key={item.id} className="flex">
              <div className="relative h-24 w-24 sm:w-32">
                <Image
                  className="rounded-md object-cover"
                  fill
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="ml-5 flex w-full justify-between font-medium">
                <p>{item.name}</p>
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center gap-x-2">
                    <p>{item.quantity} x</p>
                    <p>{toCurrencyString(item.price)}</p>
                  </div>

                  <form action={deleteCartItem} className="text-end">
                    <input type="hidden" name="productID" value={item.id} />
                    <button
                      type="submit"
                      className="text-end text-primary hover:cursor-pointer"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between text-lg font-semibold">
            <p>Subtotal:</p>
            <p>
              {toCurrencyString(
                cart.items.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0,
                ),
              )}
            </p>
          </div>

          <Button size="lg" className="w-full">
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
