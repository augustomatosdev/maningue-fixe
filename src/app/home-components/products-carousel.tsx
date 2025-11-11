import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductItem } from "@/components/product-item";

export function ProductsCarousel({ products }: { products: any[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-6 w-[70%] md:w-full">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="pl-6 basis-full md:basis-1/4 h-full"
          >
            <ProductItem product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex text-pink-600" />
      <CarouselNext className="hidden md:flex text-pink-600" />
    </Carousel>
  );
}
