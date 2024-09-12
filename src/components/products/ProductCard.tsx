import { toCurrencyString } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const ProductCard = ({ product }: Readonly<{ product: Product }>) => {
  return (
    <Card>
      <CardContent className="p-0 pb-2">
        <div className="flex flex-col items-center justify-center">
          <Link
            className="flex w-full flex-col items-center justify-center gap-2"
            href={`/products/${product.id}`}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="px-1 text-center text-lg md:text-xl">
              {product.name}
            </div>
            <div className="px-1 text-center text-base text-muted-foreground md:text-lg">
              {product.description}
            </div>
            <div className="text-muted-foreground">
              {toCurrencyString(product.price)}
            </div>
          </Link>
          <Button
            className="m-auto mt-2"
            disabled={product.productStatus === "Out_Of_Stock"}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
