// VENDORS/SHOPS
const vendors = [
  {
    id: "vendor_1",
    name: "Luxe Beauty Boutique",
    slug: "luxe-beauty-boutique",
    description:
      "Premium beauty products curated for the modern woman. Specializing in luxury skincare and makeup from international brands.",
    logo: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1583001809515-fd1458521ec8?w=1200&h=400&fit=crop",
    email: "contact@luxebeauty.com",
    phone: "+1 (555) 123-4567",
    address: "123 Beauty Lane, New York, NY 10001",
    rating: 4.8,
    totalReviews: 342,
    verified: true,
    createdAt: "2022-03-15",
  },
  {
    id: "vendor_2",
    name: "Natural Glow Store",
    slug: "natural-glow-store",
    description:
      "Your destination for organic and natural beauty products. We believe in clean beauty that's good for you and the planet.",
    logo: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=400&fit=crop",
    email: "hello@naturalglow.com",
    phone: "+1 (555) 234-5678",
    address: "456 Organic Ave, Los Angeles, CA 90001",
    rating: 4.9,
    totalReviews: 521,
    verified: true,
    createdAt: "2021-07-22",
  },
  {
    id: "vendor_3",
    name: "K-Beauty Paradise",
    slug: "k-beauty-paradise",
    description:
      "Authentic Korean beauty products imported directly from Seoul. Experience the K-beauty revolution with innovative skincare.",
    logo: "https://images.unsplash.com/photo-1621607513920-5f8e3df7f79e?w=200&h=200&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1556228852-80a1e4e10e76?w=1200&h=400&fit=crop",
    email: "info@kbeautyparadise.com",
    phone: "+1 (555) 345-6789",
    address: "789 Seoul Street, San Francisco, CA 94102",
    rating: 4.7,
    totalReviews: 289,
    verified: true,
    createdAt: "2022-11-08",
  },
  {
    id: "vendor_4",
    name: "Glamour Essentials",
    slug: "glamour-essentials",
    description:
      "Professional makeup and beauty tools for makeup artists and beauty enthusiasts. Quality products at competitive prices.",
    logo: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&h=200&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=1200&h=400&fit=crop",
    email: "support@glamouressentials.com",
    phone: "+1 (555) 456-7890",
    address: "321 Makeup Blvd, Miami, FL 33101",
    rating: 4.6,
    totalReviews: 198,
    verified: true,
    createdAt: "2023-01-14",
  },
];

// BRANDS
const brands = [
  {
    id: "brand_1",
    name: "Radiant Skin Co.",
    slug: "radiant-skin-co",
    description: "Science-backed skincare solutions",
    logo: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=150&h=150&fit=crop",
    country: "USA",
    foundedYear: 2015,
  },
  {
    id: "brand_2",
    name: "Pure Essence",
    slug: "pure-essence",
    description: "100% natural and organic beauty",
    logo: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=150&h=150&fit=crop",
    country: "France",
    foundedYear: 2018,
  },
  {
    id: "brand_3",
    name: "Seoul Glow",
    slug: "seoul-glow",
    description: "Authentic K-beauty innovation",
    logo: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=150&h=150&fit=crop",
    country: "South Korea",
    foundedYear: 2016,
  },
  {
    id: "brand_4",
    name: "Glamazon Beauty",
    slug: "glamazon-beauty",
    description: "Bold and beautiful makeup",
    logo: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=150&h=150&fit=crop",
    country: "USA",
    foundedYear: 2019,
  },
  {
    id: "brand_5",
    name: "Botanical Bliss",
    slug: "botanical-bliss",
    description: "Plant-powered skincare",
    logo: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?w=150&h=150&fit=crop",
    country: "Australia",
    foundedYear: 2017,
  },
  {
    id: "brand_6",
    name: "Lumière Beauty",
    slug: "lumiere-beauty",
    description: "French elegance in every bottle",
    logo: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=150&h=150&fit=crop",
    country: "France",
    foundedYear: 2014,
  },
  {
    id: "brand_7",
    name: "Vitality Labs",
    slug: "vitality-labs",
    description: "Clinical-grade beauty solutions",
    logo: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=150&h=150&fit=crop",
    country: "Switzerland",
    foundedYear: 2020,
  },
  {
    id: "brand_8",
    name: "Zen Cosmetics",
    slug: "zen-cosmetics",
    description: "Mindful beauty rituals",
    logo: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=150&h=150&fit=crop",
    country: "Japan",
    foundedYear: 2016,
  },
  {
    id: "brand_9",
    name: "Velvet Touch",
    slug: "velvet-touch",
    description: "Luxury meets affordability",
    logo: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=150&h=150&fit=crop",
    country: "Italy",
    foundedYear: 2018,
  },
  {
    id: "brand_10",
    name: "EcoGlow",
    slug: "ecoglow",
    description: "Sustainable beauty for all",
    logo: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150&h=150&fit=crop",
    country: "Canada",
    foundedYear: 2021,
  },
];

// CATEGORIES
const categories = [
  {
    id: "cat_1",
    name: "Skincare",
    slug: "skincare",
    description: "Complete skincare solutions for every skin type",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
    productCount: 8,
  },
  {
    id: "cat_2",
    name: "Makeup",
    slug: "makeup",
    description: "Express yourself with our makeup collection",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
    productCount: 6,
  },
  {
    id: "cat_3",
    name: "Hair Care",
    slug: "hair-care",
    description: "Nourish and style your hair",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop",
    productCount: 3,
  },
  {
    id: "cat_4",
    name: "Body Care",
    slug: "body-care",
    description: "Pamper your body from head to toe",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop",
    productCount: 3,
  },
];

// PRODUCTS
const products = [
  {
    id: "prod_1",
    title: "Hydrating Vitamin C Serum Tailand Cosmetics",
    slug: "hydrating-vitamin-c-serum",
    description:
      "A powerful antioxidant serum that brightens, firms, and evens skin tone. Formulated with 15% pure Vitamin C, hyaluronic acid, and vitamin E to deliver radiant, youthful-looking skin. Suitable for all skin types, this lightweight serum absorbs quickly and works to reduce the appearance of fine lines and dark spots.",
    vendorId: "vendor_1",
    brandId: "brand_1",
    categoryId: "cat_1",
    price: 68.0,
    compareAtPrice: 85.0,
    cost: 34.0,
    sku: "VIT-C-SER-001",
    barcode: "1234567890123",
    inventory: 156,
    weight: 30,
    weightUnit: "ml",
    featured: true,
    published: true,
    rating: 4.7,
    reviewCount: 234,
    tags: ["serum", "vitamin-c", "brightening", "anti-aging"],
    thumbnail:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_1_1",
        url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop",
        alt: "Vitamin C Serum bottle front view",
      },
      {
        id: "img_1_2",
        url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop",
        alt: "Vitamin C Serum texture",
      },
    ],
    variants: [
      {
        id: "var_1_1",
        title: "30ml",
        price: 68.0,
        compareAtPrice: 85.0,
        sku: "VIT-C-SER-001-30ML",
        inventory: 156,
        size: "30ml",
        available: true,
      },
      {
        id: "var_1_2",
        title: "50ml",
        price: 98.0,
        compareAtPrice: 120.0,
        sku: "VIT-C-SER-001-50ML",
        inventory: 89,
        size: "50ml",
        available: true,
      },
    ],
    createdAt: "2024-08-15",
    updatedAt: "2024-11-01",
  },
  {
    id: "prod_2",
    title: "Retinol Night Cream",
    slug: "retinol-night-cream",
    description:
      "Transform your skin overnight with this advanced retinol formula. Contains 0.5% pure retinol, peptides, and ceramides to reduce wrinkles, improve texture, and boost collagen production while you sleep. Enriched with soothing botanicals to minimize irritation.",
    vendorId: "vendor_1",
    brandId: "brand_7",
    categoryId: "cat_1",
    price: 89.0,
    compareAtPrice: 115.0,
    cost: 45.0,
    sku: "RET-NIG-CRM-002",
    barcode: "1234567890124",
    inventory: 94,
    weight: 50,
    weightUnit: "ml",
    featured: true,
    published: true,
    rating: 4.8,
    reviewCount: 312,
    tags: ["retinol", "night-cream", "anti-aging", "wrinkles"],
    thumbnail:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_2_1",
        url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
        alt: "Retinol Night Cream jar",
      },
      {
        id: "img_2_2",
        url: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=200&h=200&fit=crop",
        alt: "Retinol cream texture close-up",
      },
    ],
    variants: [
      {
        id: "var_2_1",
        title: "50ml",
        price: 89.0,
        compareAtPrice: 115.0,
        sku: "RET-NIG-CRM-002-50ML",
        inventory: 94,
        size: "50ml",
        available: true,
      },
    ],
    createdAt: "2024-07-20",
    updatedAt: "2024-10-28",
  },
  {
    id: "prod_3",
    title: "Organic Rose Water Toner",
    slug: "organic-rose-water-toner",
    description:
      "Pure and gentle toner made from 100% organic Bulgarian rose water. Balances pH, hydrates, and refreshes skin while tightening pores. Free from alcohol, parabens, and synthetic fragrances. Perfect for all skin types, especially sensitive and dry skin.",
    vendorId: "vendor_2",
    brandId: "brand_2",
    categoryId: "cat_1",
    price: 32.0,
    compareAtPrice: 42.0,
    cost: 16.0,
    sku: "ORG-RSE-TON-003",
    barcode: "1234567890125",
    inventory: 203,
    weight: 150,
    weightUnit: "ml",
    featured: false,
    published: true,
    rating: 4.6,
    reviewCount: 178,
    tags: ["toner", "organic", "rose-water", "natural"],
    thumbnail:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_3_1",
        url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop",
        alt: "Rose Water Toner bottle",
      },
    ],
    variants: [
      {
        id: "var_3_1",
        title: "150ml",
        price: 32.0,
        compareAtPrice: 42.0,
        sku: "ORG-RSE-TON-003-150ML",
        inventory: 203,
        size: "150ml",
        available: true,
      },
      {
        id: "var_3_2",
        title: "250ml",
        price: 48.0,
        compareAtPrice: 62.0,
        sku: "ORG-RSE-TON-003-250ML",
        inventory: 127,
        size: "250ml",
        available: true,
      },
    ],
    createdAt: "2024-09-02",
    updatedAt: "2024-11-05",
  },
  {
    id: "prod_4",
    title: "Hyaluronic Acid Moisturizer",
    slug: "hyaluronic-acid-moisturizer",
    description:
      "Intensely hydrating moisturizer with multi-weight hyaluronic acid that penetrates multiple skin layers. Provides immediate and long-lasting hydration, plumps fine lines, and creates a healthy moisture barrier. Non-greasy formula perfect for day and night use.",
    vendorId: "vendor_2",
    brandId: "brand_5",
    categoryId: "cat_1",
    price: 56.0,
    compareAtPrice: 72.0,
    cost: 28.0,
    sku: "HYA-MOS-004",
    barcode: "1234567890126",
    inventory: 167,
    weight: 50,
    weightUnit: "ml",
    featured: true,
    published: true,
    rating: 4.9,
    reviewCount: 421,
    tags: ["moisturizer", "hyaluronic-acid", "hydrating", "plumping"],
    thumbnail:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_4_1",
        url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop",
        alt: "Hyaluronic Acid Moisturizer jar",
      },
      {
        id: "img_4_2",
        url: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=200&h=200&fit=crop",
        alt: "Moisturizer application",
      },
    ],
    variants: [
      {
        id: "var_4_1",
        title: "50ml",
        price: 56.0,
        compareAtPrice: 72.0,
        sku: "HYA-MOS-004-50ML",
        inventory: 167,
        size: "50ml",
        available: true,
      },
    ],
    createdAt: "2024-06-10",
    updatedAt: "2024-10-22",
  },
  {
    id: "prod_7",
    title: "Gentle Cleansing Oil",
    slug: "gentle-cleansing-oil",
    description:
      "Luxurious oil cleanser that melts away makeup, sunscreen, and impurities without stripping skin. Formulated with nourishing plant oils including jojoba, sweet almond, and vitamin E. Emulsifies easily with water for complete removal. Leaves skin soft, clean, and balanced.",
    vendorId: "vendor_2",
    brandId: "brand_2",
    categoryId: "cat_1",
    price: 38.0,
    compareAtPrice: 48.0,
    cost: 19.0,
    sku: "GEN-CLN-OIL-007",
    barcode: "1234567890129",
    inventory: 215,
    weight: 200,
    weightUnit: "ml",
    featured: false,
    published: true,
    rating: 4.6,
    reviewCount: 156,
    tags: ["cleanser", "oil", "makeup-remover", "gentle"],
    thumbnail:
      "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_7_1",
        url: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?w=200&h=200&fit=crop",
        alt: "Cleansing Oil bottle",
      },
    ],
    variants: [
      {
        id: "var_7_1",
        title: "200ml",
        price: 38.0,
        compareAtPrice: 48.0,
        sku: "GEN-CLN-OIL-007-200ML",
        inventory: 215,
        size: "200ml",
        available: true,
      },
    ],
    createdAt: "2024-09-18",
    updatedAt: "2024-11-07",
  },

  {
    id: "prod_9",
    title: "Velvet Matte Lipstick",
    slug: "velvet-matte-lipstick",
    description:
      "Ultra-pigmented matte lipstick with a velvety smooth finish. Long-lasting formula enriched with vitamin E and jojoba oil for comfortable all-day wear without dryness. Buildable coverage that glides on effortlessly. Available in 12 stunning shades from nudes to bold reds.",
    vendorId: "vendor_4",
    brandId: "brand_4",
    categoryId: "cat_2",
    price: 28.0,
    compareAtPrice: 36.0,
    cost: 14.0,
    sku: "VEL-MAT-LIP-009",
    barcode: "1234567890131",
    inventory: 245,
    weight: 3.5,
    weightUnit: "g",
    featured: true,
    published: true,
    rating: 4.8,
    reviewCount: 412,
    tags: ["lipstick", "matte", "long-lasting", "makeup"],
    thumbnail:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_9_1",
        url: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=200&fit=crop",
        alt: "Velvet Matte Lipstick",
      },
      {
        id: "img_9_2",
        url: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=200&h=200&fit=crop",
        alt: "Lipstick color swatches",
      },
    ],
    variants: [
      {
        id: "var_9_1",
        title: "Ruby Red",
        price: 28.0,
        compareAtPrice: 36.0,
        sku: "VEL-MAT-LIP-009-RED",
        inventory: 67,
        color: "Ruby Red",
        colorHex: "#C41E3A",
        available: true,
      },
      {
        id: "var_9_2",
        title: "Nude Bliss",
        price: 28.0,
        compareAtPrice: 36.0,
        sku: "VEL-MAT-LIP-009-NUDE",
        inventory: 89,
        color: "Nude Bliss",
        colorHex: "#E8B4A0",
        available: true,
      },
      {
        id: "var_9_3",
        title: "Berry Burst",
        price: 28.0,
        compareAtPrice: 36.0,
        sku: "VEL-MAT-LIP-009-BERRY",
        inventory: 89,
        color: "Berry Burst",
        colorHex: "#8B3A62",
        available: true,
      },
    ],
    createdAt: "2024-06-22",
    updatedAt: "2024-11-04",
  },
  {
    id: "prod_10",
    title: "HD Foundation",
    slug: "hd-foundation",
    description:
      "Professional high-definition foundation with buildable medium-to-full coverage. Weightless formula blurs imperfections and creates a flawless, natural finish. Infused with SPF 20 and antioxidants. Long-wearing, transfer-resistant, and suitable for all skin types. Available in 24 shades.",
    vendorId: "vendor_4",
    brandId: "brand_4",
    categoryId: "cat_2",
    price: 52.0,
    compareAtPrice: 68.0,
    cost: 26.0,
    sku: "HD-FND-010",
    barcode: "1234567890132",
    inventory: 178,
    weight: 30,
    weightUnit: "ml",
    featured: true,
    published: true,
    rating: 4.7,
    reviewCount: 356,
    tags: ["foundation", "hd", "full-coverage", "spf"],
    thumbnail:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_10_1",
        url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&h=200&fit=crop",
        alt: "HD Foundation bottle",
      },
      {
        id: "img_10_2",
        url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
        alt: "Foundation shade range",
      },
    ],
    variants: [
      {
        id: "var_10_1",
        title: "Fair 1.0",
        price: 52.0,
        compareAtPrice: 68.0,
        sku: "HD-FND-010-F1",
        inventory: 45,
        shade: "Fair 1.0",
        available: true,
      },
      {
        id: "var_10_2",
        title: "Light 2.5",
        price: 52.0,
        compareAtPrice: 68.0,
        sku: "HD-FND-010-L2",
        inventory: 52,
        shade: "Light 2.5",
        available: true,
      },
      {
        id: "var_10_3",
        title: "Medium 4.0",
        price: 52.0,
        compareAtPrice: 68.0,
        sku: "HD-FND-010-M4",
        inventory: 48,
        shade: "Medium 4.0",
        available: true,
      },
      {
        id: "var_10_4",
        title: "Deep 6.5",
        price: 52.0,
        compareAtPrice: 68.0,
        sku: "HD-FND-010-D6",
        inventory: 33,
        shade: "Deep 6.5",
        available: true,
      },
    ],
    createdAt: "2024-07-08",
    updatedAt: "2024-10-29",
  },

  {
    id: "prod_15",
    title: "Argan Oil Hair Serum",
    slug: "argan-oil-hair-serum",
    description:
      "Pure Moroccan argan oil serum that transforms dry, damaged hair. Rich in vitamin E, fatty acids, and antioxidants. Tames frizz, adds shine, and protects against heat styling. Lightweight, non-greasy formula absorbs quickly. Suitable for all hair types.",
    vendorId: "vendor_2",
    brandId: "brand_2",
    categoryId: "cat_3",
    price: 48.0,
    compareAtPrice: 62.0,
    cost: 24.0,
    sku: "ARG-HAIR-015",
    barcode: "1234567890137",
    inventory: 167,
    weight: 50,
    weightUnit: "ml",
    featured: true,
    published: true,
    rating: 4.8,
    reviewCount: 412,
    tags: ["hair-serum", "argan-oil", "frizz-control", "shine"],
    thumbnail:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_15_1",
        url: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200&h=200&fit=crop",
        alt: "Argan Oil Hair Serum",
      },
    ],
    variants: [
      {
        id: "var_15_1",
        title: "50ml",
        price: 48.0,
        compareAtPrice: 62.0,
        sku: "ARG-HAIR-015-50ML",
        inventory: 167,
        size: "50ml",
        available: true,
      },
    ],
    createdAt: "2024-08-07",
    updatedAt: "2024-11-01",
  },
  {
    id: "prod_16",
    title: "Keratin Repair Shampoo",
    slug: "keratin-repair-shampoo",
    description:
      "Professional salon-quality shampoo infused with keratin and collagen. Repairs and strengthens damaged hair while gently cleansing. Restores elasticity, smoothness, and natural shine. Sulfate-free, paraben-free formula safe for color-treated hair. Perfect for stressed and weakened hair.",
    vendorId: "vendor_2",
    brandId: "brand_5",
    categoryId: "cat_3",
    price: 38.0,
    compareAtPrice: 48.0,
    cost: 19.0,
    sku: "KER-SHP-016",
    barcode: "1234567890138",
    inventory: 203,
    weight: 300,
    weightUnit: "ml",
    featured: false,
    published: true,
    rating: 4.7,
    reviewCount: 298,
    tags: ["shampoo", "keratin", "repair", "strengthening"],
    thumbnail:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_16_1",
        url: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=200&h=200&fit=crop",
        alt: "Keratin Repair Shampoo",
      },
    ],
    variants: [
      {
        id: "var_16_1",
        title: "300ml",
        price: 38.0,
        compareAtPrice: 48.0,
        sku: "KER-SHP-016-300ML",
        inventory: 203,
        size: "300ml",
        available: true,
      },
    ],
    createdAt: "2024-09-15",
    updatedAt: "2024-11-05",
  },
  {
    id: "prod_17",
    title: "Deep Conditioning Hair Mask",
    slug: "deep-conditioning-hair-mask",
    description:
      "Intensive treatment mask with avocado oil, shea butter, and panthenol. Deeply nourishes and hydrates dry, brittle hair. Use weekly for softer, more manageable hair with reduced breakage. Pleasant coconut fragrance. Suitable for all hair types, especially dry and chemically treated hair.",
    vendorId: "vendor_2",
    brandId: "brand_5",
    categoryId: "cat_3",
    price: 42.0,
    compareAtPrice: 54.0,
    cost: 21.0,
    sku: "DEP-HAIR-MSK-017",
    barcode: "1234567890139",
    inventory: 145,
    weight: 250,
    weightUnit: "ml",
    featured: true,
    published: true,
    rating: 4.9,
    reviewCount: 367,
    tags: ["hair-mask", "deep-conditioning", "hydrating", "treatment"],
    thumbnail:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_17_1",
        url: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=200&h=200&fit=crop",
        alt: "Deep Conditioning Hair Mask",
      },
    ],
    variants: [
      {
        id: "var_17_1",
        title: "250ml",
        price: 42.0,
        compareAtPrice: 54.0,
        sku: "DEP-HAIR-MSK-017-250ML",
        inventory: 145,
        size: "250ml",
        available: true,
      },
    ],
    createdAt: "2024-07-24",
    updatedAt: "2024-10-30",
  },
  {
    id: "prod_18",
    title: "Luxe Body Butter",
    slug: "luxe-body-butter",
    description:
      "Ultra-rich body butter with shea butter, cocoa butter, and coconut oil. Intensely moisturizes and nourishes even the driest skin. Whipped texture melts into skin without greasy residue. Delicate vanilla and honey scent. Perfect for post-shower hydration.",
    vendorId: "vendor_1",
    brandId: "brand_6",
    categoryId: "cat_4",
    price: 44.0,
    compareAtPrice: 56.0,
    cost: 22.0,
    sku: "LUX-BOD-BUT-018",
    barcode: "1234567890140",
    inventory: 189,
    weight: 200,
    weightUnit: "ml",
    featured: true,
    published: true,
    rating: 4.8,
    reviewCount: 445,
    tags: ["body-butter", "moisturizer", "hydrating", "luxury"],
    thumbnail:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_18_1",
        url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop",
        alt: "Luxe Body Butter jar",
      },
    ],
    variants: [
      {
        id: "var_18_1",
        title: "200ml",
        price: 44.0,
        compareAtPrice: 56.0,
        sku: "LUX-BOD-BUT-018-200ML",
        inventory: 189,
        size: "200ml",
        available: true,
      },
    ],
    createdAt: "2024-08-20",
    updatedAt: "2024-11-03",
  },
  {
    id: "prod_19",
    title: "Sugar Scrub Exfoliator",
    slug: "sugar-scrub-exfoliator",
    description:
      "Gentle yet effective body scrub with natural sugar crystals and nourishing oils. Buffs away dead skin cells revealing soft, smooth skin. Infused with vitamin E, almond oil, and essential oils. Available in lavender, citrus, and rose scents. Leaves skin polished and hydrated.",
    vendorId: "vendor_2",
    brandId: "brand_2",
    categoryId: "cat_4",
    price: 36.0,
    compareAtPrice: 46.0,
    cost: 18.0,
    sku: "SUG-SCR-019",
    barcode: "1234567890141",
    inventory: 167,
    weight: 300,
    weightUnit: "g",
    featured: false,
    published: true,
    rating: 4.7,
    reviewCount: 312,
    tags: ["body-scrub", "exfoliator", "sugar", "natural"],
    thumbnail:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_19_1",
        url: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200&h=200&fit=crop",
        alt: "Sugar Scrub Exfoliator",
      },
    ],
    variants: [
      {
        id: "var_19_1",
        title: "Lavender Dreams",
        price: 36.0,
        compareAtPrice: 46.0,
        sku: "SUG-SCR-019-LAV",
        inventory: 67,
        scent: "Lavender Dreams",
        available: true,
      },
      {
        id: "var_19_2",
        title: "Citrus Burst",
        price: 36.0,
        compareAtPrice: 46.0,
        sku: "SUG-SCR-019-CIT",
        inventory: 54,
        scent: "Citrus Burst",
        available: true,
      },
      {
        id: "var_19_3",
        title: "Rose Garden",
        price: 36.0,
        compareAtPrice: 46.0,
        sku: "SUG-SCR-019-RSE",
        inventory: 46,
        scent: "Rose Garden",
        available: true,
      },
    ],
    createdAt: "2024-09-10",
    updatedAt: "2024-11-07",
  },
  {
    id: "prod_20",
    title: "Hydrating Hand Cream",
    slug: "hydrating-hand-cream",
    description:
      "Fast-absorbing hand cream with shea butter and glycerin. Provides long-lasting moisture without greasy feel. Strengthens nails and softens cuticles. Compact tube perfect for purse or desk. Gentle fragrance with notes of jasmine and green tea. Dermatologist-tested.",
    vendorId: "vendor_1",
    brandId: "brand_6",
    categoryId: "cat_4",
    price: 22.0,
    compareAtPrice: 28.0,
    cost: 11.0,
    sku: "HYD-HND-CRM-020",
    barcode: "1234567890142",
    inventory: 298,
    weight: 75,
    weightUnit: "ml",
    featured: false,
    published: true,
    rating: 4.6,
    reviewCount: 189,
    tags: ["hand-cream", "moisturizer", "fast-absorbing", "travel-size"],
    thumbnail:
      "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?w=500&h=500&fit=crop",
    images: [
      {
        id: "img_20_1",
        url: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?w=800&h=800&fit=crop",
        thumbnail:
          "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?w=200&h=200&fit=crop",
        alt: "Hydrating Hand Cream tube",
      },
    ],
    variants: [
      {
        id: "var_20_1",
        title: "75ml",
        price: 22.0,
        compareAtPrice: 28.0,
        sku: "HYD-HND-CRM-020-75ML",
        inventory: 298,
        size: "75ml",
        available: true,
      },
    ],
    createdAt: "2024-06-30",
    updatedAt: "2024-10-27",
  },
];

// COLLECTIONS
const collections = [
  {
    id: "col_1",
    title: "Anti-Aging Essentials",
    slug: "anti-aging-essentials",
    description:
      "Complete anti-aging skincare routine featuring retinol, peptides, and antioxidants to reduce fine lines and restore youthful radiance.",
    coverImage:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    products: ["prod_1", "prod_2", "prod_4", "prod_6"],
    published: true,
    featured: true,
    productCount: 4,
    sortOrder: 1,
    createdAt: "2024-08-01",
  },
  {
    id: "col_2",
    title: "Natural & Organic Beauty",
    slug: "natural-organic-beauty",
    description:
      "Pure, clean beauty products made with certified organic ingredients. Free from harsh chemicals, parabens, and sulfates.",
    coverImage:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    products: ["prod_3", "prod_7", "prod_8", "prod_19"],
    published: true,
    featured: true,
    productCount: 4,
    sortOrder: 2,
    createdAt: "2024-07-15",
  },
  {
    id: "col_3",
    title: "K-Beauty Favorites",
    slug: "k-beauty-favorites",
    description:
      "The best of Korean skincare innovation. Multi-step routines, innovative formulas, and glass skin goals.",
    coverImage:
      "https://images.unsplash.com/photo-1556228852-80a1e4e10e76?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1556228852-80a1e4e10e76?w=400&h=400&fit=crop",
    products: ["prod_5"],
    published: true,
    featured: true,
    productCount: 1,
    sortOrder: 3,
    createdAt: "2024-09-05",
  },
  {
    id: "col_4",
    title: "Makeup Must-Haves",
    slug: "makeup-must-haves",
    description:
      "Essential makeup products for a flawless look. From foundation to lipstick, everything you need for your beauty routine.",
    coverImage:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
    products: ["prod_9", "prod_10", "prod_11", "prod_12", "prod_13", "prod_14"],
    published: true,
    featured: true,
    productCount: 6,
    sortOrder: 4,
    createdAt: "2024-06-20",
  },
  {
    id: "col_5",
    title: "Hair Care Heroes",
    slug: "hair-care-heroes",
    description:
      "Transform your hair with professional-grade treatments. Repair, nourish, and style with confidence.",
    coverImage:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
    products: ["prod_15", "prod_16", "prod_17"],
    published: true,
    featured: false,
    productCount: 3,
    sortOrder: 5,
    createdAt: "2024-07-28",
  },
  {
    id: "col_6",
    title: "Body Luxuries",
    slug: "body-luxuries",
    description:
      "Indulgent body care for silky smooth skin. Pamper yourself with luxurious textures and heavenly scents.",
    coverImage:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
    products: ["prod_18", "prod_19", "prod_20"],
    published: true,
    featured: false,
    productCount: 3,
    sortOrder: 6,
    createdAt: "2024-08-18",
  },
  {
    id: "col_7",
    title: "New Arrivals",
    slug: "new-arrivals",
    description:
      "Discover the latest additions to our beauty collection. Be the first to try trending products.",
    coverImage:
      "https://images.unsplash.com/photo-1583001809515-fd1458521ec8?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1583001809515-fd1458521ec8?w=400&h=400&fit=crop",
    products: ["prod_1", "prod_5", "prod_11", "prod_18"],
    published: true,
    featured: true,
    productCount: 4,
    sortOrder: 7,
    createdAt: "2024-10-01",
  },
  {
    id: "col_8",
    title: "Best Sellers",
    slug: "best-sellers",
    description:
      "Customer favorites and top-rated products. These cult classics are loved by beauty enthusiasts worldwide.",
    coverImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    products: ["prod_4", "prod_5", "prod_11", "prod_17", "prod_18"],
    published: true,
    featured: true,
    productCount: 5,
    sortOrder: 8,
    createdAt: "2024-06-01",
  },
];

// EXPORT ALL DATA
export const mockData = {
  vendors,
  brands,
  categories,
  products,
  collections,
};

// Individual exports for convenience
export { vendors, brands, categories, products, collections };

// Helper functions
export const getProductsByCategory = (categoryId: string) => {
  return products.filter((p) => p.categoryId === categoryId);
};

export const getProductsByVendor = (vendorId: string) => {
  return products.filter((p) => p.vendorId === vendorId);
};

export const getProductsByBrand = (brandId: string) => {
  return products.filter((p) => p.brandId === brandId);
};

export const getFeaturedProducts = () => {
  return products.filter((p) => p.featured);
};

export const getProductById = (productId: string) => {
  return products.find((p) => p.id === productId);
};

export const getCollectionProducts = (collectionId: string) => {
  const collection = collections.find((c) => c.id === collectionId);
  if (!collection) return [];
  return collection.products
    .map((productId) => products.find((p) => p.id === productId))
    .filter(Boolean);
};

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
};

// Usage example:
/*
  import { mockData, vendors, products, getProductsByCategory } from './mockData.js';
  
  // Get all data
  console.log(mockData);
  
  // Get specific data
  console.log(vendors);
  console.log(products);
  
  // Use helper functions
  const skincareProducts = getProductsByCategory('cat_1');
  const featuredProducts = getFeaturedProducts();
  */
