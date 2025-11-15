"use client";

import * as React from "react";
import Link from "next/link";
import {
  MenuIcon,
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
import { DrawerTabs, type DrawerTabId } from "./drawer-tabs";
import { NavProductsItems } from "./nav-products-items";
import { NavServicesItems } from "./nav-services-items";
import { toast } from "sonner";

const DRAWER_SHORTCUTS = [
  { label: "Minha conta", href: "/login", icon: UserIcon },
  { label: "Rastreio", href: "/rastreamento", icon: TruckIcon },
  { label: "Trocar ou devolver", href: "/trocas", icon: RotateCcwIcon },
];

const APP_LINKS = [
  {
    label: "App Store",
    href: "https://apps.apple.com/br/app/Belleza/id6733744901",
    image: "/apple-store-download.svg",
  },
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.Belleza",
    image: "/google-play-download.svg",
  },
];

export function NavDrawer() {
  const [activeTab, setActiveTab] = React.useState<DrawerTabId>("products");

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="text-pink-600"
          aria-label="Abrir menu de navegação"
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex h-full w-full max-w-sm flex-col bg-white">
        <DrawerHeader className="border-b border-pink-100 pb-4">
          <DrawerTitle className="sr-only">Menu de navegação</DrawerTitle>
          <div className="flex items-center justify-between gap-4">
            <Link href="/" aria-label="Belleza">
              <img src="/mf-logo.svg" alt="Belleza" className="h-10" />
            </Link>
            <DrawerClose asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Fechar menu"
                className="text-pink-600"
              >
                <XIcon className="h-6 w-6" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        <div className="flex flex-1 flex-col overflow-hidden">
          <nav
            aria-label="Acesso rápido"
            className="grid grid-cols-3 gap-4 px-4 py-4 text-center"
          >
            {DRAWER_SHORTCUTS.map(({ label, href, icon: Icon }) => (
              <DrawerClose asChild key={href}>
                <button
                  onClick={() =>
                    toast.info(
                      "Servidor em manutenção. Por favor, tente novamente mais tarde."
                    )
                  }
                  aria-label={label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-pink-100 bg-pink-50/40 py-3 text-xs font-medium text-pink-700"
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              </DrawerClose>
            ))}
          </nav>

          <DrawerTabs activeTab={activeTab} handleTabChange={setActiveTab} />

          <div className="flex-1 overflow-y-auto px-4 py-2">
            <div
              id="products-panel"
              role="tabpanel"
              aria-labelledby="products-tab"
              hidden={activeTab !== "products"}
            >
              <NavProductsItems />
            </div>
            <div
              id="services-panel"
              role="tabpanel"
              aria-labelledby="services-tab"
              hidden={activeTab !== "services"}
            >
              <NavServicesItems />
            </div>
          </div>
        </div>

        <DrawerFooter className="border-t border-pink-100">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold text-gray-800">
              Baixe o app Belleza
            </p>
            <div className="flex items-center justify-center gap-4">
              {APP_LINKS.map((app) => (
                <Link
                  key={app.href}
                  href={app.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${app.label}`}
                >
                  <img src={app.image} alt={app.label} className="h-10" />
                </Link>
              ))}
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
