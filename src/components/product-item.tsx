import Link from "next/link";
import { Star } from "lucide-react";
import { ProductItemActions } from "./product-item-actions";

type ProductPreview = {
  id?: string;
  slug?: string;
  title?: string;
  price?: number;
  compareAtPrice?: number | null;
  thumbnail?: string | null;
  rating?: number | null;
  reviewCount?: number | null;
};

interface ProductItemProps {
  product?: ProductPreview | null;
}

const FALLBACK_IMAGE = "/png-icons/makeup.png";
const FALLBACK_TITLE = "Produto em destaque";
const CARD_MIN_HEIGHT = "26rem";
const TITLE_MIN_HEIGHT = "3.25rem";
const CURRENCY = new Intl.NumberFormat("pt-AO", {
  style: "currency",
  currency: "AOA",
});

const formatCurrency = (value?: number | null) =>
  typeof value === "number" ? CURRENCY.format(value) : null;

const getDiscountPercent = (price?: number, compareAtPrice?: number | null) => {
  if (
    typeof price !== "number" ||
    typeof compareAtPrice !== "number" ||
    compareAtPrice <= price
  ) {
    return null;
  }

  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const {
    title = FALLBACK_TITLE,
    slug,
    price,
    compareAtPrice,
    thumbnail,
    rating,
    reviewCount,
  } = product ?? {};

  const cover = thumbnail || FALLBACK_IMAGE;
  const formattedPrice = formatCurrency(price);
  const formattedCompareAtPrice = formatCurrency(compareAtPrice);
  const discountPercent = getDiscountPercent(price, compareAtPrice);
  const productHref = slug ? `/products/${slug}` : "/products";

  return (
    <article
      className="flex h-full min-h-[26rem] flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      style={{ minHeight: CARD_MIN_HEIGHT }}
    >
      <Link
        href={productHref}
        aria-label={`Ver detalhes do produto ${title}`}
        className="relative block overflow-hidden rounded-xl"
      >
        {discountPercent ? (
          <span className="absolute left-3 top-3 rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
            -{discountPercent}%
          </span>
        ) : null}
        <img
          src={cover}
          alt={title}
          loading="lazy"
          className="h-48 w-full rounded-xl object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2">
        <Link href={productHref} className="group focus:outline-none">
          <p
            className="text-lg font-semibold leading-snug text-gray-900 transition group-hover:text-pink-600 group-focus:text-pink-600 md:text-xl"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: TITLE_MIN_HEIGHT,
            }}
          >
            {title}
          </p>
        </Link>

        {(rating || reviewCount) && (
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Star className="h-4 w-4 fill-pink-500 text-pink-500" />
            {typeof rating === "number" && (
              <span className="font-semibold text-gray-900">
                {rating.toFixed(1)}
              </span>
            )}
            {typeof reviewCount === "number" && reviewCount > 0 && (
              <span>({reviewCount.toLocaleString("pt-BR")})</span>
            )}
          </div>
        )}

        <div className="mt-auto">
          {formattedCompareAtPrice && discountPercent ? (
            <p className="text-sm font-semibold text-gray-500 line-through">
              {formattedCompareAtPrice}
            </p>
          ) : null}
          {formattedPrice ? (
            <p className="text-2xl font-bold text-gray-900">{formattedPrice}</p>
          ) : (
            <p className="text-sm text-gray-500">Preço em breve</p>
          )}
        </div>
      </div>

      <ProductItemActions product={product ?? {}} />
    </article>
  );
};
