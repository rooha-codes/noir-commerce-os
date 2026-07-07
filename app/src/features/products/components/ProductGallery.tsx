import type { Product } from "@/types/product"

type ProductGalleryProps = {
  product: Product
}

export function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {product.gallery.map((image) => (
        <div key={image} className="aspect-[3/4] overflow-hidden bg-white/5">
          <img
            src={image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
