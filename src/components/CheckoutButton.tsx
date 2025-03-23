"use client";

import { env } from "@/env/client";
import { CartItemData } from "@/types/cart-data";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ComponentProps, useState } from "react";
import { Button } from "./ui/button";

const CheckoutButton = ({
  amount,
  cartItems,
  ...props
}: Readonly<{ amount: string; cartItems: CartItemData[] }> &
  ComponentProps<typeof Button>) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? env.NEXT_PUBLIC_PROD_BASE_URL
      : env.NEXT_PUBLIC_DEV_BASE_URL;

  const checkout = async (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    try {
      setLoading(true);

      const response = await fetch(`${baseUrl}/api/stripe/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });

      const data = await response.json();

      if (data.url) {
        router.push(data.url);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Button
      {...props}
      onClick={checkout}
      size="lg"
      className="w-full"
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="group w-full animate-spin" />
      ) : (
        `Checkout ${amount}`
      )}
    </Button>
  );
};

export default CheckoutButton;
