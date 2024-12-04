import { addCartItem } from "@/app/actions/cartActions";
import { enumToString, toCurrencyString } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AddToCartButton from "../AddToCartButton";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ProductCard = ({ product }: Readonly<{ product: Product }>) => {
  const addProductToCart = addCartItem.bind(null, product.id);

  return (
    <Card className="max-h-full">
      <CardContent className="max-h-full p-0">
        <Carousel className="h-2/3 w-full rounded-lg object-cover">
          <CarouselContent className="ml-0">
            {product.images.map((image, index) => (
              <CarouselItem key={index} className="relative">
                <Image
                  key={index}
                  src={image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full rounded-lg object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {product.images.length > 1 && (
            <>
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-16" />
            </>
          )}
        </Carousel>
        <div className="flex h-1/3 w-full flex-col items-center justify-center">
          <Link
            className="flex flex-col items-center justify-center"
            href={`/products/${product.id}`}
          >
            <div className="px-1 text-center text-lg md:text-xl">
              {product.name}
            </div>
            <div className="line-clamp-3 px-1 text-center text-base text-muted-foreground md:text-lg">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {product.description}
              </ReactMarkdown>
            </div>
            <div className="text-muted-foreground">
              {toCurrencyString(product.price)}
            </div>
          </Link>

          {product.productStatus !== "Active" ? (
            <Button className="rounded-lg bg-primary">
              {enumToString(product.productStatus)}
            </Button>
          ) : (
            <form className="pb-2" action={addProductToCart}>
              <AddToCartButton disabled={product.productStatus !== "Active"} />
            </form>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
