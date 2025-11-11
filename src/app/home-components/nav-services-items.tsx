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
import { serviceCategories } from "@/lib/service-categories";

export function NavServicesItems() {
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Categorias</SidebarGroupLabel> */}
      <SidebarMenu className="flex flex-col gap-4">
        {serviceCategories.map((item) => (
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
