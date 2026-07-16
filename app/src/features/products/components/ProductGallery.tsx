import { useState, useCallback, useRef } from "react"
import { cn } from "@/utils/cn"
import { ImageSkeleton } from "@/components/ui/ImageSkeleton"

type ProductGalleryProps = {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])

  const displayImages = images.length > 0 ? images : []

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index))
  }, [])

  const handleThumbnailKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === "ArrowRight") {
        event.preventDefault()
        const next = Math.min(index + 1, displayImages.length - 1)
        setActiveIndex(next)
        thumbnailRefs.current[next]?.focus()
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        const prev = Math.max(index - 1, 0)
        setActiveIndex(prev)
        thumbnailRefs.current[prev]?.focus()
      }
    },
    [displayImages.length],
  )

  if (displayImages.length === 0) {
    return <ImageSkeleton aspectRatio="aspect-3/4" />
  }

  return (
    <div className="flex flex-col gap-4">
      <figure className="relative aspect-3/4 w-full overflow-hidden bg-white/5">
        {!loadedImages.has(activeIndex) && (
          <ImageSkeleton className="absolute inset-0" aspectRatio="aspect-3/4" />
        )}
        <img
          src={displayImages[activeIndex]}
          alt={`${productName} — View ${activeIndex + 1} of ${displayImages.length}`}
          onLoad={() => handleImageLoad(activeIndex)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            loadedImages.has(activeIndex) ? "opacity-100" : "opacity-0",
          )}
        />
      </figure>

      {displayImages.length > 1 && (
        <div
          className="flex gap-3"
          role="tablist"
          aria-label="Product gallery thumbnails"
        >
          {displayImages.map((image, index) => {
            const isActive = index === activeIndex
            const isLoaded = loadedImages.has(index)

            return (
              <button
                key={`${image}-${index}`}
                ref={(el) => { thumbnailRefs.current[index] = el }}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => handleThumbnailKeyDown(e, index)}
                role="tab"
                aria-selected={isActive}
                aria-label={`View image ${index + 1} of ${displayImages.length}`}
                tabIndex={isActive ? 0 : -1}
                className={cn(
                  "relative h-20 w-16 shrink-0 overflow-hidden bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "ring-1 ring-white"
                    : "opacity-50 hover:opacity-80",
                )}
              >
                {!isLoaded && <ImageSkeleton className="absolute inset-0" aspectRatio="aspect-[3/4]" />}
                <img
                  src={image}
                  alt=""
                  onLoad={() => handleImageLoad(index)}
                  className={cn(
                    "h-full w-full object-cover transition-opacity duration-300",
                    isLoaded ? "opacity-100" : "opacity-0",
                  )}
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}