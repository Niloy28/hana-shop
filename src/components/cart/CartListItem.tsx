import { deleteCartItem } from "@/app/actions/cartActions";
import { toCurrencyString } from "@/lib/utils";
import { CartItemData } from "@/types/cart-data";
import Image from "next/image";
import CartAdjustmentUI from "./CartAdjustmentUI";

const CartListItem = ({ item }: Readonly<{ item: CartItemData }>) => {
  return (
    <div className="flex">
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
            <p>{toCurrencyString(item.price)}</p>
          </div>

          <CartAdjustmentUI id={item.id} quantity={item.quantity} />

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
  );
};

export default CartListItem;
