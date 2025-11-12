"use client";
import { BreadcrumbComponent } from "@/components/bread-crumb";
import { ProductCategoriesFilter } from "@/components/product-categories-filter";
import { ProductItem } from "@/components/product-item";
import {
  getProducts,
  getProductsByBrandSlug,
  getProductsByCategorySlug,
} from "@/lib/mock-data";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("categoryId");
  const brandSlug = searchParams.get("brandId");
  const products = categorySlug
    ? getProductsByCategorySlug(categorySlug)
    : brandSlug
    ? getProductsByBrandSlug(brandSlug as string)
    : getProducts();
  console.log({ categorySlug, brandSlug, products });

  return (
    <div className="max-w-screen-2xl mx-auto">
      <img
        src="https://images-static.nykaa.com/uploads/8e6ef689-5499-4cd4-ba33-d7fbf20b1c38.jpg?tr=cm-pad_resize,w-1200"
        alt="banner"
        className="w-full h-full object-cover min-h-[200px]"
      />
      <BreadcrumbComponent />
      <div className="pb-12 max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center gap-4 justify-end">
          <p className="text-sm text-gray-500">Classificar por:</p>
          <ProductCategoriesFilter />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-12">
          {products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
