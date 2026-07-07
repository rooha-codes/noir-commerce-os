import type { Product } from "@/types/product"

export type { Product }

export const products: Product[] = [
  {
    id: "coat-01",
    slug: "structured-oversized-coat",
    name: "Structured Oversized Coat",
    category: "Outerwear",
    price: 420,
    description:
      "A sculptural oversized coat designed with clean volume, heavy drape, and a quiet architectural silhouette.",
    details: ["Heavy wool blend", "Oversized fit", "Hidden button closure", "Made for layering"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal"],
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "shirt-01",
    slug: "essential-black-shirt",
    name: "Essential Black Shirt",
    category: "Shirts",
    price: 140,
    description:
      "A refined daily shirt with a clean collar, relaxed structure, and minimal finish.",
    details: ["Cotton poplin", "Relaxed cut", "Mother-of-pearl buttons", "Soft hand feel"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506629905607-d9d297d2c4cf?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "trouser-01",
    slug: "minimal-tailored-trouser",
    name: "Minimal Tailored Trouser",
    category: "Trousers",
    price: 190,
    description:
      "A sharp everyday trouser with a minimal front, soft taper, and clean break.",
    details: ["Tailored fit", "Mid rise", "Pressed crease", "Premium suiting fabric"],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Stone"],
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "tee-01",
    slug: "everyday-heavy-cotton-tee",
    name: "Everyday Heavy Cotton Tee",
    category: "Essentials",
    price: 85,
    description:
      "A heavyweight tee designed for structure, comfort, and repeated wear.",
    details: ["Heavy cotton jersey", "Boxy fit", "Ribbed collar", "Pre-shrunk finish"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Grey"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    ],
  },
]
