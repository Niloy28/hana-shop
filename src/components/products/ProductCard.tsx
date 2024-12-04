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
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-between p-0">
        <Carousel className="ml-0 w-full rounded-lg">
          <CarouselContent className="ml-0">
            {product.images.map((image, index) => (
              <CarouselItem key={index} className="w-full pl-0">
                <Image
                  key={index}
                  src={image}
                  alt={product.name}
                  width={400}
                  height={250}
                  className="m-auto h-[250px] w-full rounded-lg object-fill"
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
            <div className="line-clamp-2 px-1 text-center text-base text-muted-foreground md:text-lg">
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
            <form className="mb-4 pb-1" action={addProductToCart}>
              <AddToCartButton disabled={product.productStatus !== "Active"} />
            </form>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
