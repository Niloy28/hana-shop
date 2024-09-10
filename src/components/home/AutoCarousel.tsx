"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Carousel } from "../ui/carousel";

const AutoCarousel = ({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <Carousel
      className={className}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {children}
    </Carousel>
  );
};

export default AutoCarousel;
