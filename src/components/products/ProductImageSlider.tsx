"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ProductImageSlider = ({
  images,
}: Readonly<{
  images: string[];
}>) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="grid items-start gap-6 md:gap-3">
      <div className="flex max-w-screen-md flex-1 flex-col gap-2 overflow-hidden rounded-lg">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="h-3/5 rounded-lg"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image}
                  width={600}
                  height={600}
                  alt="Product image"
                  className="w-full rounded-lg object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>

        <Carousel opts={{ loop: true }} className="rounded-lg">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 hover:cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(index);
                }}
              >
                <Image
                  src={image}
                  width={600}
                  height={600}
                  alt="Product image"
                  className={cn(
                    "h-full w-full rounded-lg object-cover",
                    currentImageIndex === index
                      ? "rounded-lg border-2 border-secondary-foreground"
                      : "",
                  )}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductImageSlider;
