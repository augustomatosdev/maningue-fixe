"use client";

import * as React from "react";
import Link from "next/link";

import { useIsMobile } from "@/hooks/use-ismobile";
import {
  NavigationMenu as NavigationMenuComponent,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { productCategories } from "@/lib/mock-data";

export function NavigationMenu() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenuComponent
      className="w-full h-14 px-4 justify-center"
      viewport={isMobile}
    >
      <NavigationMenuList className="flex-wrap justify-center items-center gap-4 w-full flex">
        {productCategories.map((item: any) => (
          <NavigationMenuItem className="hidden md:block" key={item.name}>
            <NavigationMenuLink asChild>
              <Link
                href={`/products?categoryId=${item.slug}`}
                className="font-bold"
              >
                {item.name}
              </Link>
            </NavigationMenuLink>
            {/* <NavigationMenuTrigger className="font-bold">
              {item.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">Components</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Documentation</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Blocks</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent> */}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenuComponent>
  );
}
