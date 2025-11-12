"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCartStore } from "@/store/use-cart";
import { Plus, ShoppingCart } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

type Variant = {
  id: string;
  title?: string | null;
  price?: number | null;
  compareAtPrice?: number | null;
  available?: boolean;
};

type VariantsDialogProps = {
  product: {
    title?: string;
    variants?: Variant[];
    id: string;
    price: number;
    thumbnail: string;
    compareAtPrice: number;
  };
  buttonSize?: "lg" | "sm";
};

const CURRENCY = new Intl.NumberFormat("pt-AO", {
  style: "currency",
  currency: "AOA",
});

const getDiscountPercent = (price?: number | null, compare?: number | null) => {
  if (
    typeof price !== "number" ||
    typeof compare !== "number" ||
    compare <= price
  ) {
    return null;
  }
  return Math.round(((compare - price) / compare) * 100);
};

export function VariantsDialog({
  product,
  buttonSize = "lg",
}: VariantsDialogProps) {
  const openCart = useCartStore((state: any) => state.openCart);
  const addItem = useCartStore((state: any) => state.addItem);
  const variants = product.variants ?? [];
  const [selectedVariant, setSelectedVariant] = React.useState(variants[0]?.id);

  if (!variants.length) {
    return null;
  }

  const handleSubmit = async () => {
    await addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      variant: selectedVariant,
      compareAtPrice: product.compareAtPrice,
      quantity: 1,
    });
    openCart();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={buttonSize}
          className="text-pink-600 font-bold hover:text-pink-700 border-2"
          variant="outline"
        >
          <Plus className="h-4 w-4" />
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[440px] bg-white">
        <DialogHeader>
          <DialogTitle>Selecione a variação</DialogTitle>
          <DialogDescription>
            Escolha a variação antes de adicionar ao carrinho.
          </DialogDescription>
        </DialogHeader>

        <RadioGroup
          value={selectedVariant}
          onValueChange={setSelectedVariant}
          className="space-y-3 py-4"
        >
          {variants.map((variant) => {
            const price =
              typeof variant.price === "number"
                ? CURRENCY.format(variant.price)
                : "Sob consulta";
            const comparePrice =
              typeof variant.compareAtPrice === "number"
                ? CURRENCY.format(variant.compareAtPrice)
                : null;
            const percent = getDiscountPercent(
              variant.price,
              variant.compareAtPrice
            );

            return (
              <label
                key={variant.id}
                htmlFor={variant.id}
                className={cn(
                  "flex cursor-pointer gap-4 rounded-2xl border border-pink-100 px-4 py-3 shadow-sm transition hover:border-pink-300",
                  selectedVariant === variant.id && "border-pink-400 bg-pink-50"
                )}
              >
                <div className="pt-1">
                  <RadioGroupItem value={variant.id} id={variant.id} />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {variant.title ?? product.title}
                      </p>
                      {variant.available === false && (
                        <p className="text-xs font-semibold text-red-500">
                          Indisponível
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      {comparePrice && percent ? (
                        <p className="text-xs text-gray-400 line-through">
                          {comparePrice}
                        </p>
                      ) : null}
                      <p className="text-sm font-semibold text-pink-600">
                        {price}
                      </p>
                    </div>
                  </div>
                  {percent ? (
                    <span className="inline-flex w-fit items-center rounded-full bg-pink-100 px-2 py-0.5 text-xs font-semibold text-pink-600">
                      -{percent}%
                    </span>
                  ) : null}
                </div>
              </label>
            );
          })}
        </RadioGroup>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="w-full bg-pink-600 text-white hover:bg-pink-700"
              onClick={handleSubmit}
            >
              <ShoppingCart className="h-4 w-4" />
              Adicionar ao carrinho
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
