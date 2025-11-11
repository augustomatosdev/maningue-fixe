import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type BrandPreview = {
  id: string;
  name: string;
  logo?: string | null;
  slug?: string;
};

interface BrandsCarouselProps {
  brands: BrandPreview[];
}

const FALLBACK_BRAND_LOGO = "/png-icons/makeup.png";

export function BrandsCarousel({ brands }: BrandsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="space-x-2">
        {brands.map((brand) => {
          const { id, name, logo } = brand;
          const displayName = name || "Marca destaque";
          const imageSrc = logo || FALLBACK_BRAND_LOGO;

          return (
            <CarouselItem key={id} className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-pink-100 bg-white p-4 text-center shadow-sm transition hover:border-pink-300 hover:shadow-md">
                <div className="flex size-32 items-center justify-center rounded-full border-2 border-pink-100 bg-pink-50">
                  <img
                    src={imageSrc}
                    alt={displayName}
                    loading="lazy"
                    className="size-28 rounded-full object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900 md:text-base line-clamp-2">
                  {displayName}
                </p>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex text-pink-600" />
      <CarouselNext className="hidden md:flex text-pink-600" />
    </Carousel>
  );
}
