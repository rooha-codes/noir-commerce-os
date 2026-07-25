import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
} from "react"

import { ImageSkeleton } from "@/components/ui/ImageSkeleton"
import { cn } from "@/utils/cn"

type ProductGalleryProps = {
  images: string[]
  productName: string
}

export function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])

  const displayImages = images.length > 0 ? images : []

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((previousImages) => {
      const updatedImages = new Set(previousImages)
      updatedImages.add(index)

      return updatedImages
    })
  }, [])

  const handleThumbnailKeyDown = useCallback(
    (
      event: KeyboardEvent<HTMLButtonElement>,
      index: number,
    ) => {
      if (event.key === "ArrowRight") {
        event.preventDefault()

        const nextIndex = Math.min(
          index + 1,
          displayImages.length - 1,
        )

        setActiveIndex(nextIndex)
        thumbnailRefs.current[nextIndex]?.focus()
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()

        const previousIndex = Math.max(index - 1, 0)

        setActiveIndex(previousIndex)
        thumbnailRefs.current[previousIndex]?.focus()
      }

      if (event.key === "Home") {
        event.preventDefault()

        setActiveIndex(0)
        thumbnailRefs.current[0]?.focus()
      }

      if (event.key === "End") {
        event.preventDefault()

        const lastIndex = displayImages.length - 1

        setActiveIndex(lastIndex)
        thumbnailRefs.current[lastIndex]?.focus()
      }
    },
    [displayImages.length],
  )

  if (displayImages.length === 0) {
    return (
      <ImageSkeleton aspectRatio="aspect-3/4" />
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <figure className="relative aspect-3/4 w-full overflow-hidden bg-white/5">
        {!loadedImages.has(activeIndex) && (
          <ImageSkeleton
            className="absolute inset-0"
            aspectRatio="aspect-3/4"
          />
        )}

        <img
          key={displayImages[activeIndex]}
          src={displayImages[activeIndex]}
          alt={`${productName} - Image ${activeIndex + 1} of ${displayImages.length}`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => handleImageLoad(activeIndex)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            loadedImages.has(activeIndex)
              ? "opacity-100"
              : "opacity-0",
          )}
        />
      </figure>

      {displayImages.length > 1 && (
        <div
          className="flex gap-3 overflow-x-auto pb-1"
          role="tablist"
          aria-label={`${productName} image gallery`}
        >
          {displayImages.map((image, index) => {
            const isActive = index === activeIndex
            const isLoaded = loadedImages.has(index)

            return (
              <button
                key={`${image}-${index}`}
                ref={(element) => {
                  thumbnailRefs.current[index] = element
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`View ${productName} image ${index + 1} of ${displayImages.length}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) =>
                  handleThumbnailKeyDown(event, index)
                }
                className={cn(
                  "relative h-20 w-16 shrink-0 overflow-hidden bg-white/5 transition",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-white/50 focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-black",
                  isActive
                    ? "ring-1 ring-white"
                    : "opacity-50 hover:opacity-80",
                )}
              >
                {!isLoaded && (
                  <ImageSkeleton
                    className="absolute inset-0"
                    aspectRatio="aspect-3/4"
                  />
                )}

                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(index)}
                  className={cn(
                    "h-full w-full object-cover transition-opacity duration-300",
                    isLoaded
                      ? "opacity-100"
                      : "opacity-0",
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

export default ProductGallery