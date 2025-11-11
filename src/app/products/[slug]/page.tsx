"use client";
import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { BreadcrumbComponent } from "@/components/bread-crumb";
import { Heart, ShieldCheck, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ProductAccordion } from "@/components/product-accordion";
import { useCartOpenStore } from "@/store/use-cart";

const images = [
  {
    original:
      "https://wepink.vtexassets.com/arquivos/ids/159897-1200-auto?v=638755052548500000&width=1200&height=auto&aspect=true",
    thumbnail:
      "https://wepink.vtexassets.com/arquivos/ids/159897-1200-auto?v=638755052548500000&width=1200&height=auto&aspect=true",
  },
  {
    original:
      "https://wepink.vtexassets.com/arquivos/ids/159898-1200-auto?v=638755052548500000&width=1200&height=auto&aspect=true",
    thumbnail:
      "https://wepink.vtexassets.com/arquivos/ids/159898-1200-auto?v=638755052548500000&width=1200&height=auto&aspect=true",
  },
  {
    original:
      "https://wepink.vtexassets.com/arquivos/ids/159900-1200-auto?v=638755052548630000&width=1200&height=auto&aspect=true",
    thumbnail:
      "https://wepink.vtexassets.com/arquivos/ids/159900-1200-auto?v=638755052548630000&width=1200&height=auto&aspect=true",
  },
];

const ProductDetailsPage = () => {
  const openCart = useCartOpenStore((state: any) => state.openCart);
  const [selectedSize, setSelectedSize] = useState<number>(125);
  return (
    <div className="max-w-screen-xl mx-auto">
      <BreadcrumbComponent />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ImageGallery items={images} />
        <div className="space-y-6 px-4">
          <p className="text-2xl font-bold text-pink-600">
            Body Splash 4Dreams Desodorante Colônia 200ml - Wepink
          </p>

          <div className="flex items-center gap-2 text-sm font-bold">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-6 h-6 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            <p>4.5</p>
            <p>(100 avaliações)</p>
          </div>
          <div>
            <p className="line-through text-gray-500 font-bold text-xl">
              R$ 100,00
            </p>
            <p className="text-2xl font-bold">R$ 80,00</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[125, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((size) => (
              <Badge
                className={cn(
                  selectedSize === size && "bg-pink-600 text-white"
                )}
                variant="outline"
                key={size}
                onClick={() => setSelectedSize(size)}
              >
                {size} ml
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="bg-pink-600 text-white font-bold hover:bg-pink-700 flex-1"
              onClick={() => openCart()}
            >
              Comprar agora
            </Button>
            <Heart className="w-10 h-10 text-pink-600 font-bold hover:text-pink-700 cursor-pointer" />
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-lg font-bold">Loja Wepink (2000 vendas)</p>
              <p className="text-sm text-gray-500 font-bold">
                90% de avaliações positivas
              </p>
            </div>
          </div>
          <div className="bg-pink-200 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <ShieldCheck className="w-6 h-6" />
              <p className="text-lg font-bold">Compre com confiança</p>
            </div>
            <p>
              Garantia de devolução do dinheiro, caso o produto não chegue a
              você, devolvemos seu dinheiro.
            </p>
            <Link href="/guarantee">
              <p className="text-sm text-pink-600 font-bold underline">
                Saiba mais
              </p>
            </Link>
          </div>
          <ProductAccordion />
        </div>
      </div>
      <div className="px-4 my-12 rounded-lg space-y-2">
        <p className="text-2xl font-bold text-pink-600">
          Comentários sobre este produto
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
