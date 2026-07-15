import type { Collection } from "@/features/collections/types"

/**
 * Static editorial metadata for each collection. Images are reused from
 * the existing, already-verified product/home imagery in the app (see
 * `data/products.ts` and `features/home`) rather than introducing new,
 * unverified asset URLs. `productCount` is intentionally left unset here
 * and derived at runtime from the live catalog — see `useCollections`.
 */
export const COLLECTIONS: Collection[] = [
  {
    id: "collection-outerwear",
    name: "Outerwear",
    slug: "outerwear",
    category: "Outerwear",
    editorialLabel: "Chapter One",
    description:
      "Sculptural coats built for heavy wool and quiet volume — the pieces that set the shape of everything worn underneath them.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "collection-shirts",
    name: "Shirts",
    slug: "shirts",
    category: "Shirts",
    editorialLabel: "Chapter Two",
    description:
      "Considered daily shirting — clean collars, relaxed structure, and finishes built to hold their form wear after wear.",
    image:
      "https://images.unsplash.com/photo-1506629905607-d9d297d2c4cf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "collection-trousers",
    name: "Trousers",
    slug: "trousers",
    category: "Trousers",
    editorialLabel: "Chapter Three",
    description:
      "Tailoring reduced to its essentials — a sharp break, a soft taper, and a rise built for how the body actually moves.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "collection-essentials",
    name: "Essentials",
    slug: "essentials",
    category: "Essentials",
    editorialLabel: "Chapter Four",
    description:
      "The pieces worn most often — heavyweight, boxy, and built first for structure, so they still hold shape after years of rotation.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",
  },
]