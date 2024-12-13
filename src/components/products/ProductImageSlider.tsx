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
    <div className="overflow-hidden rounded-lg">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex">
              <Image
                src={image}
                width={600}
                height={400}
                alt="Product image"
                className="w-full rounded-lg object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>

      <Carousel className="mt-4 rounded-lg">
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
                height={400}
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
  );
};

export default ProductImageSlider;
