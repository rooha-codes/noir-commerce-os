import { useState } from "react"
import { cn } from "@/utils/cn"

type ProductGalleryProps = {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const displayImages = images.length > 0 ? images : []

  if (displayImages.length === 0) return null

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-3/4 w-full overflow-hidden bg-white/5">
        <img
          src={displayImages[activeIndex]}
          alt={`${productName} — View ${activeIndex + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {displayImages.length > 1 && (
        <div className="flex gap-3">
          {displayImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={cn(
                "relative h-20 w-16 shrink-0 overflow-hidden bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                index === activeIndex
                  ? "ring-1 ring-white"
                  : "opacity-50 hover:opacity-80",
              )}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}