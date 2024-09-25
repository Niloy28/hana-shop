import { toCurrencyString } from "@/lib/utils";
import { Product } from "@prisma/client";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ProductCard = ({ product }: Readonly<{ product: Product }>) => {
  return (
    <Card>
      <CardContent className="p-0 pb-2">
        <div className="flex flex-col items-center justify-center">
          <Carousel className="h-full w-full rounded-lg object-cover">
            <CarouselContent className="ml-0">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full rounded-lg object-cover"
                />
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
          <Link
            className="flex w-full flex-col items-center justify-center gap-2"
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
          <Button
            className="m-auto mt-2"
            disabled={product.productStatus === "Out_Of_Stock"}
          >
            <div className="flex items-center justify-center gap-2">
              <ShoppingCartIcon />
              <p>Add to Cart</p>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
