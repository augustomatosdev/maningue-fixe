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
import { serviceCategories } from "@/lib/service-categories";

const spotlightServices = [
  { label: "Serviços perto de você", href: "/services?near=me" },
  { label: "Novidades", href: "/services?sort=latest" },
];

export function NavServicesItems() {
  return (
    <SidebarGroup className="space-y-3">
      <SidebarMenu className="flex flex-col gap-2">
        {spotlightServices.map((link) => (
          <SidebarMenuItem key={link.href}>
            <SidebarMenuButton asChild tooltip={link.label}>
              <DrawerClose asChild>
                <Link
                  href={link.href}
                  className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide"
                >
                  <img
                    src="/png-icons/makeup.png"
                    alt={link.label}
                    className="h-6 w-6"
                  />
                  <span>{link.label}</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Link>
              </DrawerClose>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}

        <SidebarMenuItem className="border-b border-pink-100 pb-2">
          <SidebarMenuButton asChild tooltip="Ver todos os serviços">
            <DrawerClose asChild>
              <Link
                href="/services"
                className="flex items-center gap-3 text-base font-semibold"
              >
                <img
                  src="/png-icons/makeup.png"
                  alt="Ver todos os serviços"
                  className="h-6 w-6"
                />
                <span>Ver todos os serviços</span>
                <ChevronRight className="ml-auto h-4 w-4" />
              </Link>
            </DrawerClose>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {serviceCategories.map((item) => (
          <SidebarMenuItem key={item.slug}>
            <SidebarMenuButton asChild tooltip={item.title}>
              <DrawerClose asChild>
                <Link
                  href={`/services?categoria=${item.slug}`}
                  className="flex items-center gap-3 text-base font-semibold capitalize"
                >
                  {item.icon && (
                    <img src={item.icon} alt={item.title} className="h-6 w-6" />
                  )}
                  <span>{item.title}</span>
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
