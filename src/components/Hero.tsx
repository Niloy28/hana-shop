import prisma from "@/lib/db";
import Image from "next/image";
import AutoCarousel from "./home/AutoCarousel";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Hero = async () => {
  const banners = await prisma.banner.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <AutoCarousel>
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem
            key={banner.id}
            className="relative h-[60vh] lg:h-[80vh]"
          >
            <Image
              src={banner.source}
              alt={banner.title}
              width={1000}
              height={700}
              className="m-auto h-full w-full rounded-lg object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoCarousel>
  );
};

export default Hero;
