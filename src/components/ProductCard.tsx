import { toCurrencyString } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ProductCard = ({ product }: Readonly<{ product: Product }>) => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <Link
            className="flex flex-col items-center justify-center gap-2"
            href={`/products/${product.id}`}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              width={600}
              height={600}
              className="mt-6 h-56 w-56 rounded-lg object-cover"
            />
            <div className="text-2xl">{product.name}</div>
            <div>{product.description}</div>
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
