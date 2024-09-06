"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Carousel } from "../ui/carousel";

const AutoCarousel = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {children}
    </Carousel>
  );
};

export default AutoCarousel;
