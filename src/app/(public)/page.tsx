import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { HeroCarousel } from "./home-components/hero-carousel";
import { MonthHighlight } from "@/components/month-highlight";
import { SubscribeSection } from "@/components/subscribe-section";
import { InstagramSection } from "@/components/instagram-section";
import { AppDownload } from "@/components/app-download";
import Footer from "@/components/footer";
import { ProductsCarousel } from "./home-components/products-carousel";
import { ServicesCarousel } from "./home-components/services-carousel";
import { BrandsCarousel } from "./home-components/brands-carousel";
import { brands, products, vendors } from "@/lib/mock-data";
import type { ServicePreview } from "@/components/service-item";

export const metadata: Metadata = {
  title: "Belleza | Beleza e bem-estar com curadoria",
  description:
    "Descubra marcas exclusivas, produtos favoritos e serviços de beleza recomendados pela curadoria Belleza.",
};

interface HomeSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  };
  children: ReactNode;
}

const HomeSection = ({
  id,
  eyebrow,
  title,
  subtitle,
  cta,
  children,
}: HomeSectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className="py-12">
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4">
      <header className="flex items-center justify-between gap-3">
        <div className="space-y-2 max-w-3xl w-[70%] md:w-full">
          {/* {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
              {eyebrow}
            </p>
          ) : null} */}
          <h2
            id={`${id}-title`}
            className="text-3xl font-bold text-gray-900 md:text-4xl"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="text-base text-gray-600 md:text-lg">{subtitle}</p>
          ) : null}
        </div>
        {cta ? (
          <Link
            href={cta.href}
            className="text-xs font-bold uppercase tracking-wide text-pink-600 underline-offset-4 hover:underline"
            aria-label={`${cta.label} - ${title}`}
          >
            {cta.label}
          </Link>
        ) : null}
      </header>
      {children}
    </div>
  </section>
);

const featuredServices: ServicePreview[] = vendors
  .slice(0, 6)
  .map((vendor, index) => ({
    id: vendor.id,
    slug: vendor.slug,
    name: vendor.name,
    coverImage: vendor.coverImage,
    address: vendor.address,
    rating: vendor.rating,
    reviewCount: vendor.totalReviews,
    tags: ["Salão de beleza", "Premium"],
    priceFrom: 80 + index * 15,
    nextAvailability:
      index % 2 === 0 ? "Agenda disponível hoje" : "Vagas esta semana",
    distanceInKm: 1.5 + index * 0.8,
  }));

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <HomeSection
        id="brands"
        eyebrow="marcas"
        title="Marcas parceiras"
        subtitle=""
      >
        <BrandsCarousel brands={brands} />
      </HomeSection>

      <HomeSection
        id="products"
        eyebrow="produtos"
        title="Conheça nossos produtos"
        subtitle="Seleção atualizada com lançamentos, best-sellers e preços especiais."
        cta={{ label: "Ver todos", href: "/products" }}
      >
        <ProductsCarousel products={products} />
      </HomeSection>

      <HomeSection
        id="services"
        eyebrow="serviços"
        title="Serviços recomendados"
        subtitle="Experiências de beleza presenciais com serviços perto de você."
        cta={{ label: "Ver todos", href: "/services" }}
      >
        <ServicesCarousel services={featuredServices} />
      </HomeSection>

      <section className="py-12">
        <div className="mx-auto max-w-screen-2xl">
          <MonthHighlight />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-2xl px-4">
          <AppDownload />
        </div>
      </section>

      <section className="py-12">
        <InstagramSection />
      </section>

      <section className="py-12">
        <SubscribeSection />
      </section>
    </main>
  );
}
