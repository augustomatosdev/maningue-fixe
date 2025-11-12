"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { VariantsDialog } from "./variants-dialog";

export const ProductItemActions = ({ product }: { product: any }) => {
  return (
    <div>
      <div className="gap-2 hidden md:flex">
        <Button
          size="lg"
          className="bg-pink-600 text-white flex-1 font-bold hover:bg-pink-700"
          asChild
        >
          <Link href={`/products/${product.slug}`}>
            <p>Comprar</p>
          </Link>
        </Button>
        <VariantsDialog product={product} buttonSize="lg" />
      </div>
      <div className="gap-2 flex md:hidden">
        <Button
          size="sm"
          className="bg-pink-600 text-white flex-1 font-bold hover:bg-pink-700"
          asChild
        >
          <Link href={`/products/${product.slug}`}>
            <p>Comprar</p>
          </Link>
        </Button>
        <VariantsDialog product={product} buttonSize="sm" />
      </div>
    </div>
  );
};
