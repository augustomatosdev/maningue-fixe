import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ServiceItem,
  type ServicePreview,
} from "@/components/service-item";

interface ServicesCarouselProps {
  services: ServicePreview[];
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-6 w-[70%] md:w-full">
        {services.map((service, index) => (
          <CarouselItem
            key={service.id || service.slug || index}
            className="pl-6 basis-full md:basis-1/4"
          >
            <ServiceItem service={service} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex text-pink-600" />
      <CarouselNext className="hidden md:flex text-pink-600" />
    </Carousel>
  );
}
