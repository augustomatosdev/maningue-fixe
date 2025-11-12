import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, MapPin, Star } from "lucide-react";

export type ServicePreview = {
  id?: string;
  slug?: string;
  name?: string;
  coverImage?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  tags?: string[];
  rating?: number | null;
  reviewCount?: number | null;
  priceFrom?: number | null;
  nextAvailability?: string | null;
  distanceInKm?: number | null;
};

interface ServiceItemProps {
  service?: ServicePreview | null;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop";
const FALLBACK_NAME = "Serviço em destaque";
const FALLBACK_TAG = "Beleza";
const CARD_MIN_HEIGHT = "26rem";
const TITLE_MIN_HEIGHT = "3.25rem";
const CURRENCY = new Intl.NumberFormat("pt-AO", {
  style: "currency",
  currency: "AOA",
});

const formatCurrency = (value?: number | null) =>
  typeof value === "number" ? CURRENCY.format(value) : null;

const formatDistance = (distance?: number | null) => {
  if (typeof distance !== "number") return null;
  const formatter = new Intl.NumberFormat("pt-AO", {
    maximumFractionDigits: distance < 10 ? 1 : 0,
    minimumFractionDigits: distance < 10 ? 1 : 0,
  });

  return `${formatter.format(distance)} km`;
};

const formatLocation = (
  address?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null
) => {
  const parts = [address, city, state, country].filter(Boolean);
  return parts.length ? parts.join(", ") : null;
};

export const ServiceItem = ({ service }: ServiceItemProps) => {
  const {
    name = FALLBACK_NAME,
    slug,
    coverImage,
    address,
    city,
    state,
    country,
    tags,
    rating,
    reviewCount,
    priceFrom,
    nextAvailability,
    distanceInKm,
  } = service ?? {};

  const cover = coverImage || FALLBACK_IMAGE;
  const formattedLocation = formatLocation(address, city, state, country);
  const formattedPrice = formatCurrency(priceFrom);
  const formattedDistance = formatDistance(distanceInKm);
  const displayTags =
    tags && tags.length > 0 ? tags.slice(0, 3) : [FALLBACK_TAG];
  const productHref = slug ? `/services/${slug}` : "/services";

  return (
    <article
      className="flex h-full min-h-[26rem] flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      style={{ minHeight: CARD_MIN_HEIGHT }}
    >
      <Link
        href={productHref}
        aria-label={`Ver detalhes do serviço ${name}`}
        className="relative block overflow-hidden rounded-xl"
      >
        {formattedDistance ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white shadow-md">
            {formattedDistance}
          </span>
        ) : null}
        <img
          src={cover}
          alt={name}
          loading="lazy"
          className="h-48 w-full rounded-xl object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3">
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
            {name}
          </p>
        </Link>

        {formattedLocation ? (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
            <p className="leading-relaxed">{formattedLocation}</p>
          </div>
        ) : null}

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

        <div className="flex flex-wrap gap-2">
          {displayTags.map((tag) => (
            <Badge
              key={tag}
              className="bg-pink-600/10 text-pink-600"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto space-y-1">
          {formattedPrice ? (
            <p className="text-sm font-medium text-gray-500">
              A partir de{" "}
              <span className="text-xl font-bold text-gray-900">
                {formattedPrice}
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-500">Preço sob consulta</p>
          )}
          {nextAvailability ? (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 text-gray-400" />
              <span>{nextAvailability}</span>
            </div>
          ) : null}
        </div>
      </div>

      <Button
        size="lg"
        className="bg-pink-600 text-white font-bold hover:bg-pink-700"
        // asChild
        disabled
      >
        Agendar serviço
        {/* <Link href={productHref}>Ver serviços</Link> */}
      </Button>
    </article>
  );
};
