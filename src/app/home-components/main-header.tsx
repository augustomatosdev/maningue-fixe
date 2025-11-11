"use client";
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, ShoppingCart } from "lucide-react";
import { Truck } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { UserIcon } from "lucide-react";
import { NavigationMenu } from "./navigation-menu";
import { NavDrawer } from "./nav-drawer";
import Link from "next/link";
import { useCartOpenStore } from "@/store/use-cart";
import { Button } from "@/components/ui/button";

export const MainHeader = () => {
  const cartOpen = useCartOpenStore((state: any) => state.cartOpen);
  const openCart = useCartOpenStore((state: any) => state.openCart);
  const closeCart = useCartOpenStore((state: any) => state.closeCart);
  console.log({ cartOpen });
  return (
    <div>
      <div className="block lg:hidden">
        <div className="bg-pink-100 text-center py-2 font-bold text-sm text-pink-600">
          <h1>Garanta agora o seu produto favorito!</h1>
        </div>
        <div className="flex items-center justify-between h-14 px-4">
          <NavDrawer />
          <Link href="/">
            <img src="/mf-logo.svg" alt="logo" className="h-10" />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/login" className="text-pink-600">
              <UserIcon className="w-6 h-6" />
            </Link>
            <div
              onClick={() => (cartOpen ? closeCart() : openCart())}
              className="text-pink-600 cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-xl mx-auto p-4">
          <InputGroup>
            <InputGroupInput placeholder="Pesquisar..." />
            <InputGroupAddon className="text-pink-600">
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      {/* desktop header */}
      <div className="divide-y divide-pink-200 hidden lg:block">
        <div className="bg-pink-100 text-center py-2 font-bold text-sm text-pink-600">
          <h1>Garanta agora o seu produto favorito!</h1>
        </div>
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/">
            <img src="/mf-logo.svg" alt="logo" className="h-12" />
          </Link>
          <div className="relative w-full max-w-xl">
            <InputGroup>
              <InputGroupInput placeholder="Pesquisar..." />
              <InputGroupAddon className="text-pink-600">
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <Truck className="w-4 h-4" />
              <p>Rastreio</p>
            </div>
            <div className="flex items-center gap-1">
              <RotateCcw className="w-4 h-4" />
              <p>Trocar ou Devolver</p>
            </div>
            <Link href="/login" className="text-pink-600">
              <UserIcon className="w-6 h-6" />
            </Link>
            <div
              onClick={() => (cartOpen ? closeCart() : openCart())}
              className="text-pink-600 cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6" />
            </div>
          </div>
        </div>
        <NavigationMenu />
      </div>
    </div>
  );
};
