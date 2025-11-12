"use client";
import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { BreadcrumbComponent } from "@/components/bread-crumb";
import { Heart, ShieldCheck, Star, Truck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ProductAccordion } from "@/components/product-accordion";
import { useCartStore } from "@/store/use-cart";
import { useParams } from "next/navigation";
import { getProductBySlug, getVendorById } from "@/lib/mock-data";
import { toast } from "sonner";

const ProductDetailsPage = () => {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);
  const vendor = product ? getVendorById(product?.vendorId) : null;

  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const openCart = useCartStore((state: any) => state.openCart);

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-AO", {
      style: "currency",
      currency: "AOA",
    }).format(price);
  };

  // Product images for gallery
  const images = product?.images.map((image: any) => ({
    original: image.url,
    thumbnail: image.thumbnail,
  }));

  // Handle buy now
  const handleBuyNow = () => {
    if (!selectedVariant) {
      setShowValidation(true);
      return;
    }
    if (
      !product?.id ||
      !product?.title ||
      !product?.price ||
      !product?.thumbnail
    ) {
      console.error("Product data is missing");
      return;
    }
    addItem({
      id: product?.id,
      title: product?.title,
      price: product?.price,
      thumbnail: product?.thumbnail,
      variant: selectedVariant ?? null,
      compareAtPrice: product?.compareAtPrice ?? null,
      quantity: 1,
      createdAt: new Date().toISOString(),
    });
    openCart();
  };

  // Handle add to cart
  const handleAddToWishList = () => {
    if (!selectedVariant) {
      setShowValidation(true);
      return;
    }
    // Add to cart logic here
    toast.success("Produto adicionado aos favoritos");
  };

  // Handle variant selection
  const handleVariantSelect = (variantId: string) => {
    setSelectedVariant(variantId);
    setShowValidation(false);
  };

  // Error state - product not found
  if (!product) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Produto não encontrado
          </h2>
          <p className="text-gray-600">
            O produto que você está procurando não existe.
          </p>
          <Link href="/products">
            <Button>Voltar para produtos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto py-6">
      <BreadcrumbComponent />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <ImageGallery items={images || []} />

        {/* Product Info */}
        <div className="space-y-6 px-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={cn(
                      "w-5 h-5",
                      index < Math.floor(product.rating || 0)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              <span className="font-semibold text-gray-900">
                {product.rating || 0}
              </span>
              <span className="text-gray-600">
                ({product.reviewCount || 0} avaliações)
              </span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex flex-col items-baseline flex-wrap">
            {product.compareAtPrice && (
              <span className="text-xl text-gray-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="text-4xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* //Stock indicator
          {product.stock < 10 && product.stock > 0 && (
            <p className="text-sm text-orange-600 font-medium">
              Apenas {product.stock} em estoque!
            </p>
          )} */}

          {/* Size Selection */}
          <div className="flex flex-wrap gap-2">
            {product.variants?.map((variant: any) => (
              <Badge
                key={variant.id}
                variant="outline"
                onClick={() => handleVariantSelect(variant.id)}
                className={cn(
                  "cursor-pointer px-4 text-base font-medium transition-all",
                  selectedVariant === variant?.id &&
                    "bg-pink-600 text-white border-pink-600",
                  variant.stock === 0 &&
                    "opacity-50 cursor-not-allowed line-through"
                )}
              >
                {variant.title}
              </Badge>
            ))}
          </div>
          {showValidation && !selectedVariant && (
            <p className="text-sm text-red-600 mt-2">
              Por favor, selecione um tamanho
            </p>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-semibold w-full"
              onClick={handleBuyNow}
            >
              Comprar agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleAddToWishList}
              className="w-full border-pink-600 text-pink-600 hover:bg-pink-50 font-semibold"
            >
              <Heart className="w-5 h-5 mr-2" />
              Adicionar aos favoritos
            </Button>
          </div>

          {/* Delivery Info */}
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <Truck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Entrega estimada
              </p>
              <p className="text-sm text-gray-600">
                2-7 dias úteis para Luanda
              </p>
            </div>
          </div>

          {/* Vendor */}
          <Link
            href={`/vendor/${vendor?.id}`}
            className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-pink-600 transition-colors group"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage src={vendor?.logo} alt={vendor?.name} />
              <AvatarFallback>{vendor?.name?.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900 group-hover:text-pink-600">
                  {vendor?.name}
                </p>
                {vendor?.verified && (
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                )}
              </div>
              <p className="text-sm text-gray-600">
                {vendor?.rating}% positivo • {vendor?.totalReviews} vendas
              </p>
            </div>
          </Link>

          {/* Guarantee */}
          <div className="p-4 bg-pink-50 border-2 border-pink-200 rounded-lg">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Compra Protegida
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  Garantia de devolução do dinheiro caso o produto não chegue ou
                  não corresponda à descrição.
                </p>
                <Link
                  href="/guarantee"
                  className="text-sm text-pink-600 hover:text-pink-700 font-medium underline"
                >
                  Saiba mais sobre nossa garantia
                </Link>
              </div>
            </div>
          </div>

          {/* Product Accordion */}
          <ProductAccordion product={product} />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-4 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Comentários sobre este produto
        </h2>
        <div className="p-8 border-2 border-gray-200 rounded-lg text-center">
          <p className="text-gray-600">
            As avaliações dos clientes aparecerão aqui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
