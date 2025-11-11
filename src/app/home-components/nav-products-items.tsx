"use client";

import {
  BookOpen,
  Bot,
  ChevronRight,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { productCategories } from "@/lib/product-categories";

export function NavProductsItems() {
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Categorias</SidebarGroupLabel> */}
      <SidebarMenu className="flex flex-col gap-4">
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Todos">
            <img src="/png-icons/makeup.png" alt="Todos" className="w-6 h-6" />
            <span className="text-md font-bold">PROMOS</span>
            <ChevronRight className="ml-auto" />
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Todos">
            <img src="/png-icons/makeup.png" alt="Todos" className="w-6 h-6" />
            <span className="text-md font-bold">KITS</span>
            <ChevronRight className="ml-auto" />
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem className="border-b border-pink-200">
          <SidebarMenuButton tooltip="Todos">
            <img src="/png-icons/makeup.png" alt="Todos" className="w-6 h-6" />
            <span className="text-md font-bold">Ver todos os produtos</span>
            <ChevronRight className="ml-auto" />
          </SidebarMenuButton>
        </SidebarMenuItem>

        {productCategories.map((item) => (
          <SidebarMenuItem key={item.slug}>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && (
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
              )}
              <span className="text-md font-bold">{item.title}</span>
              <ChevronRight className="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
