"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DrawerClose } from "@/components/ui/drawer";
import { productCategories } from "@/lib/mock-data";
import { toast } from "sonner";

const spotlightLinks = [
  { label: "Promos", href: "/collections/promocoes" },
  { label: "Kits presentes", href: "/collections/kits" },
  { label: "Ver todos os produtos", href: "/products" },
];

export function NavProductsItems() {
  return (
    <SidebarGroup className="space-y-3">
      <SidebarMenu className="flex flex-col gap-2">
        {spotlightLinks.map((link, index) => (
          <SidebarMenuItem
            key={link.href}
            className={
              index === spotlightLinks.length - 1
                ? "border-b border-pink-100 pb-2"
                : ""
            }
          >
            <SidebarMenuButton asChild tooltip={link.label}>
              <DrawerClose asChild>
                <button
                  onClick={() =>
                    toast.info(
                      "Servidor em manutenção. Por favor, tente novamente mais tarde."
                    )
                  }
                  aria-label={link.label}
                  // href={link.href}
                  className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide"
                >
                  {/* <img
                    src="/png-icons/makeup.png"
                    alt={link.label}
                    className="h-6 w-6"
                  /> */}
                  <span>{link.label}</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </button>
              </DrawerClose>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}

        {productCategories.map((item) => (
          <SidebarMenuItem key={item.slug}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <DrawerClose asChild>
                <Link
                  href={`/products?categoryId=${item.slug}`}
                  className="flex items-center gap-3 text-base font-semibold capitalize"
                >
                  <img src={item.icon} alt={item.name} className="h-6 w-6" />
                  <span>{item.name}</span>
                  <ChevronRight className="ml-auto h-4 w-4 text-gray-400" />
                </Link>
              </DrawerClose>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
