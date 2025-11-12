"use client";

import { useMemo, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { CartItem, useCartStore } from "@/store/use-cart";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/mock-data";
import { useRouter } from "next/navigation";

type LineItem = {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number | null;
  thumbnail?: string | null;
  variant?: string | null;
  quantity: number;
};

const currency = new Intl.NumberFormat("pt-AO", {
  style: "currency",
  currency: "AOA",
});

const formatCurrency = (value: number) => currency.format(value);

export function CartDrawer() {
  const router = useRouter();
  const isAuthenticated = false;
  const cartOpen = useCartStore((state: any) => state.cartOpen);
  const closeCart = useCartStore((state: any) => state.closeCart);
  const removeItem = useCartStore((state: any) => state.removeItem);
  const updateQuantity = useCartStore((state: any) => state.updateQuantity);

  const items = useCartStore((state: any) => state.items);

  const { subtotal, discount } = useMemo(() => {
    const subtotalValue = items.reduce(
      (sum: number, item: CartItem) => sum + item.price * item.quantity,
      0
    );
    const compareValue = items.reduce(
      (sum: number, item: CartItem) =>
        sum + (item.compareAtPrice ?? item.price) * item.quantity,
      0
    );

    return {
      subtotal: subtotalValue,
      discount: Math.max(0, compareValue - subtotalValue),
    };
  }, [items]);

  return (
    <Drawer direction="right" open={cartOpen} onOpenChange={closeCart}>
      <DrawerContent className="flex h-full w-full flex-col bg-white px-0 shadow-xl sm:max-w-md">
        <DrawerHeader className="border-b border-pink-100 pb-4">
          <div className="flex items-center justify-between">
            <DrawerTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <ShoppingCart className="h-5 w-5 text-pink-600" />
              <span>Seu carrinho</span>
            </DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" aria-label="Fechar carrinho">
                <X className="h-5 w-5 text-gray-500" />
              </Button>
            </DrawerClose>
          </div>
          <DrawerDescription className="text-sm text-gray-500">
            {items.length} {items.length === 1 ? "produto" : "produtos"} na
            sacola
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          {items.length === 0 ? (
            <div className="flex min-h-[220px] flex-col items-center justify-center gap-2 text-center">
              <ShoppingCart className="h-10 w-10 text-pink-200" />
              <p className="text-lg font-semibold text-gray-900">
                Seu carrinho está vazio
              </p>
              <p className="text-sm text-gray-500">
                Explore nossos produtos e adicione seus favoritos.
              </p>
              <DrawerClose asChild>
                <Button className="bg-pink-600 text-white hover:bg-pink-700">
                  Continuar comprando
                </Button>
              </DrawerClose>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item: CartItem) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-pink-100 p-3"
                >
                  <img
                    src={item.thumbnail ?? "/png-icons/makeup.png"}
                    alt={item.title}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                          {item.title}
                        </h3>
                        {item.variant ? (
                          <p className="text-xs text-gray-500">
                            {item.variant}
                          </p>
                        ) : null}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Remover ${item.title}`}
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-gray-400" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="min-w-[140px]">
                        {item.compareAtPrice &&
                        item.compareAtPrice > item.price ? (
                          <p className="text-xs text-gray-400 line-through">
                            {formatCurrency(
                              item.compareAtPrice * item.quantity
                            )}
                          </p>
                        ) : null}
                        <p className="text-sm font-semibold text-gray-900">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-pink-600 hover:bg-pink-50"
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.id, item.quantity - 1);
                            } else {
                              removeItem(item.id);
                            }
                          }}
                          aria-label="Diminuir quantidade"
                        >
                          {item.quantity === 1 ? (
                            <Trash2 className="h-4 w-4" />
                          ) : (
                            <Minus className="h-4 w-4" />
                          )}
                        </Button>
                        <span className="w-6 text-center text-sm font-semibold text-gray-900">
                          {item.quantity}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-pink-600 hover:bg-pink-50"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <DrawerFooter className="border-t border-pink-100 bg-pink-50">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex items-center justify-between text-pink-600">
                  <span>Descontos</span>
                  <span>-{formatCurrency(discount)}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-base font-semibold text-gray-900">
                <span>Total</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <p className="text-xs text-gray-500">
                Frete e promoções aplicados no checkout.
              </p>
            </div>

            <DrawerClose asChild>
              <Button
                onClick={() => {
                  if (isAuthenticated) {
                    router.push(`/checkout`);
                  } else {
                    router.push("/login?redirect=checkout");
                  }
                }}
                className="bg-pink-600 text-white hover:bg-pink-700"
              >
                Finalizar compra
              </Button>
            </DrawerClose>

            <DrawerClose asChild>
              <Button
                variant="ghost"
                className="text-pink-600 hover:text-pink-700"
              >
                Continuar comprando
              </Button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
