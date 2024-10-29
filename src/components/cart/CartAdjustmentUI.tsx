"use client";

import { decreaseCartItem, increaseCartItem } from "@/app/actions/cartActions";
import { CircleMinus, CirclePlus, Loader2, LoaderPinwheel } from "lucide-react";
import { useFormStatus } from "react-dom";

const CartAdjustmentUI = ({
  id,
  quantity,
}: Readonly<{ id: string; quantity: number }>) => {
  const { pending } = useFormStatus();

  return (
    <div className="flex items-start justify-between">
      {pending && (
        <>
          <Loader2 className="group w-full animate-spin" />
        </>
      )}
      {!pending && (
        <>
          <form className="h-min" action={decreaseCartItem}>
            <input type="hidden" name="productID" value={id} />
            <button type="submit" disabled={quantity === 1}>
              <CircleMinus size={16} color={quantity === 1 ? "grey" : "blue"} />
            </button>
          </form>
          <p>{quantity}</p>
          <form className="h-min" action={increaseCartItem}>
            <input type="hidden" name="productID" value={id} />
            <button type="submit">
              <CirclePlus size={16} color="blue" />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CartAdjustmentUI;
