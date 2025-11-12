"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroCarouselItems = [
  {
    id: 1,
    imageDesktop:
      "https://wepink.vtexassets.com/assets/vtex.file-manager-graphql/images/0301c6a0-4556-42d1-bb6f-bd5e5e825aac___6ff24fcefe136539689a506e395bd0d4.gif",
    imageMobile:
      "https://wepink.vtexassets.com/assets/vtex.file-manager-graphql/images/422f6154-dcf4-47a0-90e7-f38d0164d1f9___ef8f414e4f2e31b2aa57c12d608f1adb.gif",
    title: "Hero Carousel 1",
    description: "Hero Carousel 1 description",
  },
  {
    id: 2,
    imageDesktop:
      "https://wepink.vtexassets.com/assets/vtex.file-manager-graphql/images/9be392fe-f968-485e-8947-6c4073d53b86___8ce9b733c8c0b994687335eb5d7d30ba.webp",
    imageMobile:
      "https://wepink.vtexassets.com/assets/vtex.file-manager-graphql/images/bb07af58-eb9f-45bf-a2c9-ebf54681c9c7___d1e76dbb5dc01e4fdf157df20ec552be.webp",
    title: "Hero Carousel 2",
    description: "Hero Carousel 2 description",
  },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {heroCarouselItems.map((item) => (
          <CarouselItem className="basis-full" key={item.id}>
            <div className="w-full">
              <img
                src={item.imageDesktop}
                alt={item.title}
                className="w-full h-full object-cover hidden md:block"
              />
              <img
                src={item.imageMobile}
                alt={item.title}
                className="w-full h-full object-cover block md:hidden"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
