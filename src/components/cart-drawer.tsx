"use client";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useCartOpenStore } from "@/store/use-cart";

export function CartDrawer() {
  const cartOpen = useCartOpenStore((state: any) => state.cartOpen);
  const closeCart = useCartOpenStore((state: any) => state.closeCart);
  return (
    <Drawer direction="right" open={cartOpen} onOpenChange={closeCart}>
      <DrawerContent className="bg-pink-100">
        <DrawerTitle></DrawerTitle>
        <DrawerDescription></DrawerDescription>
        <h1>Carrinho de compras</h1>
        <DrawerFooter className="flex flex-col gap-4 border-t border-pink-200">
          <div className="text-center text-sm font-medium">
            Baixe o app da maninguefixe
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="/">
              <img
                src="/apple-store-download.svg"
                alt="app store"
                className="h-10"
              />
            </a>
            {/* google play */}
            <a href="/">
              <img
                src="/google-play-download.svg"
                alt="google play"
                className="h-10"
              />
            </a>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
