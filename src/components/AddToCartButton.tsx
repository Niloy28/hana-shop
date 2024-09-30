"use client";

import { cn } from "@/lib/utils";
import { Loader2, ShoppingCartIcon } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const AddToCartButton = ({ className }: Readonly<{ className?: string }>) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className={cn(className, "rounded-lg bg-primary")}>
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin" />
          </div>
        </Button>
      ) : (
        <Button className={cn(className, "rounded-lg bg-primary")}>
          <div className="flex items-center justify-center gap-2">
            <ShoppingCartIcon />
            <p>Add to Cart</p>
          </div>
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
