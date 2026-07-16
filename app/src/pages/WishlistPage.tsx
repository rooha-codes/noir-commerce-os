import { Link } from "react-router-dom"
import { Heart, X } from "lucide-react"
import { RootLayout } from "@/components/layout/RootLayout"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { EmptyState } from "@/components/ui/EmptyState"
import { ROUTES } from "@/constants/routes"
import { useWishlist } from "@/features/wishlist"
import { products } from "@/data/products"
import { cn } from "@/utils/cn"

export function WishlistPage() {
  const { ids, remove, clear } = useWishlist()

  const wishlistProducts = ids
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)

  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-32">
        <Container size="narrow">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
              Saved Pieces
            </p>
            <h1 className="text-4xl font-medium tracking-tighter md:text-6xl">
              Wishlist
            </h1>
            {wishlistProducts.length > 0 && (
              <p className="mt-3 text-sm text-white/45">
                {wishlistProducts.length}{" "}
                {wishlistProducts.length === 1 ? "item" : "items"}
              </p>
            )}
          </div>

          {wishlistProducts.length === 0 ? (
            <EmptyState
              icon={<Heart size={40} />}
              title="Your wishlist is empty."
              description="Save pieces you love to revisit them later."
              action={
                <Link
                  to={ROUTES.shop}
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 text-button font-medium uppercase text-primary-foreground transition-transform duration-normal ease-standard hover:scale-[1.01] active:scale-[0.99]",
                  )}
                >
                  Explore Collection
                </Link>
              }
            />
          ) : (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                {wishlistProducts.map((product) => (
                  <div key={product.id} className="flex gap-5 py-6">
                    <Link
                      to={ROUTES.product(product.slug)}
                      className="h-36 w-28 shrink-0 overflow-hidden bg-white/5"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between gap-4">
                          <div>
                            <p className="mb-1 text-xs uppercase tracking-[0.25em] text-white/35">
                              {product.category}
                            </p>
                            <Link
                              to={ROUTES.product(product.slug)}
                              className="text-base text-white/90 hover:underline"
                            >
                              {product.name}
                            </Link>
                          </div>

                          <button
                            onClick={() => remove(product.id)}
                            aria-label={`Remove ${product.name} from wishlist`}
                            className="text-white/40 hover:text-white"
                          >
                            <X size={16} />
                          </button>
                        </div>

                        <p className="mt-1 text-sm text-white/45">
                          ${product.price}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link
                          to={ROUTES.product(product.slug)}
                          className="text-sm text-white/60 transition hover:text-white"
                        >
                          View Product →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to={ROUTES.shop}
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={clear}
                  className="text-sm text-white/40 hover:text-white"
                >
                  Clear wishlist
                </button>
              </div>
            </div>
          )}
        </Container>
      </Section>
    </RootLayout>
  )
}

export default WishlistPage