"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const translations: Record<string, string> = {
  products: "Produtos",
  product: "Produto",
  categories: "Categorias",
  category: "Categoria",
  services: "Serviços",
  service: "Serviço",
  vendors: "Lojas",
  vendor: "Loja",
  checkout: "Pagamento",
  login: "Entrar",
  cart: "Carrinho",
};

const formatSegment = (segment: string) => {
  const normalized = segment.toLowerCase();
  if (translations[normalized]) {
    return translations[normalized];
  }
  return normalized
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function BreadcrumbComponent() {
  const pathname = usePathname();
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));

  let currentPath = "";

  return (
    <Breadcrumb className="p-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Início</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          currentPath += `/${segment}`;
          const label = isLast ? segment : formatSegment(segment);

          return (
            <div className="flex items-center" key={currentPath}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={currentPath}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
