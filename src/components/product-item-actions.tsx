"use client";
import React from "react";
import { Button } from "./ui/button";
import { Plus, ShoppingCart } from "lucide-react";
import { useCartOpenStore } from "@/store/use-cart";
import Link from "next/link";

export const ProductItemActions = () => {
  const openCart = useCartOpenStore((state: any) => state.openCart);
  return (
    <div>
      <div className="gap-2 hidden md:flex">
        <Button
          size="lg"
          className="bg-pink-600 text-white flex-1 font-bold hover:bg-pink-700"
          asChild
        >
          <Link href="/products/1">
            <p>Comprar</p>
          </Link>
        </Button>
        <Button
          size="lg"
          className="text-pink-600 font-bold hover:text-pink-700 border-2 cursor-pointer"
          variant="outline"
          onClick={() => openCart()}
        >
          <Plus className="w-4 h-4" />
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </div>
      <div className="gap-2 flex md:hidden">
        <Button
          size="sm"
          className="bg-pink-600 text-white flex-1 font-bold hover:bg-pink-700"
          asChild
        >
          <Link href="/products/1">
            <p>Comprar</p>
          </Link>
        </Button>
        <Button
          size="sm"
          className="text-pink-600 font-bold hover:text-pink-700 border-2 cursor-pointer"
          variant="outline"
          onClick={() => openCart()}
        >
          <Plus className="w-4 h-4" />
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
