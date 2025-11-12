"use client";

import Link from "next/link";
import React from "react";
import { Search, ShoppingCart, RotateCcw, Truck, UserIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "./navigation-menu";
import { NavDrawer } from "./nav-drawer";
import { useCartStore } from "@/store/use-cart";
import { searchProducts } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type QuickLink = {
  icon: typeof Truck;
  label: string;
  href: string;
};

const QUICK_LINKS: QuickLink[] = [
  { icon: Truck, label: "Rastreio", href: "/rastreamento" },
  { icon: RotateCcw, label: "Trocar ou devolver", href: "/trocas" },
];

const PRICE_FORMATTER = new Intl.NumberFormat("pt-AO", {
  style: "currency",
  currency: "AOA",
});

const Announcement = () => (
  <div className="bg-pink-100 py-2 text-center text-sm font-semibold uppercase tracking-wide text-pink-600">
    Garanta agora o seu produto favorito!
  </div>
);

const SearchBar = ({ className }: { className?: string }) => {
  const [query, setQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const trimmedQuery = query.trim();

  const results = React.useMemo(() => {
    if (trimmedQuery.length < 2) return [];
    return searchProducts(trimmedQuery).slice(0, 6);
  }, [trimmedQuery]);

  const showDropdown = isFocused && trimmedQuery.length >= 2;

  return (
    <div className={cn("relative", className)}>
      <form
        role="search"
        className="relative"
        onSubmit={(event) => event.preventDefault()}
      >
        <InputGroup>
          <InputGroupInput
            placeholder="Busque por produtos, serviços ou marcas"
            aria-label="Buscar produtos e serviços"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          />
          <InputGroupAddon className="text-pink-600">
            <button
              type="submit"
              aria-label="Buscar"
              className="flex items-center justify-center"
            >
              <Search className="h-5 w-5" />
            </button>
          </InputGroupAddon>
        </InputGroup>
      </form>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 rounded-2xl border border-pink-100 bg-white p-2 shadow-xl">
          {results.length ? (
            <ul className="max-h-80 divide-y divide-pink-50 overflow-y-auto">
              {results.map((product) => {
                const price = PRICE_FORMATTER.format(product.price ?? 0);
                return (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-pink-50"
                      onClick={() => {
                        setQuery("");
                        setIsFocused(false);
                      }}
                    >
                      <img
                        src={product.thumbnail ?? "/png-icons/makeup.png"}
                        alt={product.title}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <div className="flex flex-1 flex-col">
                        <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                          {product.title}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {product.description}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-pink-600">
                        {price}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="px-4 py-6 text-center text-sm text-gray-500">
              Nenhum resultado para “{trimmedQuery}”
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const MainHeader = () => {
  const { cartOpen, openCart, closeCart } = useCartStore((state: any) => state);

  const toggleCartDrawer = () => (cartOpen ? closeCart() : openCart());

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      {/* Mobile */}
      <div className="lg:hidden">
        <Announcement />
        <div className="flex h-16 items-center justify-between px-4">
          <NavDrawer />
          <Link href="/" aria-label="Maningue Fixe">
            <img src="/mf-logo.svg" alt="Maningue Fixe" className="h-10" />
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/login"
              aria-label="Minha conta"
              className="text-pink-600"
            >
              <UserIcon className="h-6 w-6" />
            </Link>
            <button
              type="button"
              onClick={toggleCartDrawer}
              className="text-pink-600"
              aria-label="Abrir carrinho"
            >
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="px-4 pb-4">
          <SearchBar />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <Announcement />
        <div className="flex items-center justify-between gap-6 px-6 py-4">
          <Link href="/" aria-label="Maningue Fixe">
            <img src="/mf-logo.svg" alt="Maningue Fixe" className="h-12" />
          </Link>
          <SearchBar className="w-full max-w-2xl" />
          <nav
            aria-label="Links rápidos"
            className="flex items-center gap-6 text-sm font-semibold text-gray-800"
          >
            {QUICK_LINKS.map(({ icon: Icon, label, href }) => (
              <button
                key={href}
                className="flex items-center gap-2 hover:text-pink-600"
                onClick={() =>
                  toast.info(
                    "Servidor em manutenção. Por favor, tente novamente mais tarde."
                  )
                }
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
            <Link
              href="/login"
              className="flex items-center gap-2 text-pink-600"
              aria-label="Minha conta"
            >
              <UserIcon className="h-5 w-5" />
              <span>Entrar</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir carrinho"
              onClick={toggleCartDrawer}
              className="text-pink-600 hover:bg-pink-50"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </nav>
        </div>
        <NavigationMenu />
      </div>
    </header>
  );
};
