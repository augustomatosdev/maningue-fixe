"use client";

import * as React from "react";
import {
  MenuIcon,
  Minus,
  Plus,
  RotateCcwIcon,
  TruckIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DrawerTabs } from "./drawer-tabs";
import { NavProductsItems } from "./nav-products-items";
import { NavServicesItems } from "./nav-services-items";

export function NavDrawer() {
  const [activeTab, setActiveTab] = React.useState("products");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="text-pink-600">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-pink-100">
        <DrawerTitle></DrawerTitle>
        <DrawerDescription></DrawerDescription>
        <DrawerHeader>
          <div className="flex justify-between">
            <img src="/mf-logo.svg" alt="logo" className="h-10" />
            <DrawerClose asChild>
              <XIcon className="w-6 h-6 text-pink-600" />
            </DrawerClose>
          </div>
        </DrawerHeader>
        <div className="px-4 py-2 grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col gap-2 items-center">
            <UserIcon />
            <span className="text-xs font-medium">Minha conta</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <TruckIcon />
            <span className="text-xs font-medium">Rastreio</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <RotateCcwIcon />
            <span className="text-xs font-medium">Trocar ou Devolver</span>
          </div>
        </div>
        <DrawerTabs activeTab={activeTab} handleTabChange={handleTabChange} />
        {activeTab === "products" && <NavProductsItems />}
        {activeTab === "services" && <NavServicesItems />}
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
