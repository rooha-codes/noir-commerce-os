import { useState, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/utils/cn"
import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { EmptyState } from "@/components/ui/EmptyState"
import { Button } from "@/components/ui/Button"
import { ImageSkeleton } from "@/components/ui/ImageSkeleton"
import { ROUTES } from "@/constants/routes"
import { useCart } from "@/features/cart"

function CartItemImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative h-36 w-28 shrink-0 overflow-hidden bg-white/5">
      {!loaded && (
        <ImageSkeleton
          className="absolute inset-0"
          aspectRatio="aspect-[3/4]"
        />
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  )
}

export function CartPage() {
  const navigate = useNavigate()

  const {
    items,
    increase,
    decrease,
    removeItem,
    subtotal,
    clearCart,
  } = useCart()

  const handleRemove = useCallback(
    (id: string) => {
      removeItem(id)
    },
    [removeItem],
  )

  const handleCheckout = useCallback(() => {
    navigate(ROUTES.CHECKOUT)
  }, [navigate])

  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-28 md:pt-32">
        <Container size="narrow">
          <header className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
              Your Bag
            </p>

            <h1 className="text-4xl font-medium tracking-tighter md:text-6xl">
              Shopping Cart
            </h1>
          </header>

          {items.length === 0 ? (
            <EmptyState
              icon={<ShoppingBag size={40} />}
              title="Your bag is empty."
              description="Add pieces from the collection to start your order."
              action={
                <Link
                  to={ROUTES.shop}
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 text-button font-medium uppercase text-primary-foreground transition-transform duration-normal ease-standard hover:scale-[1.01] active:scale-[0.99]",
                  )}
                >
                  Continue Shopping
                </Link>
              }
            />
          ) : (
            <div className="flex flex-col gap-10">
              <ul
                className="flex flex-col divide-y divide-white/10 border-y border-white/10"
                aria-label="Cart items"
              >
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      className="flex gap-5 overflow-hidden py-6"
                    >
                      <Link
                        to={ROUTES.product(item.slug)}
                        className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                      >
                        <CartItemImage
                          src={item.image}
                          alt={item.name}
                        />
                      </Link>

                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex justify-between gap-4">
                            <div>
                              <p className="mb-1 text-xs uppercase tracking-[0.25em] text-white/35">
                                {item.category}
                              </p>

                              <Link
                                to={ROUTES.product(item.slug)}
                                className="text-base text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                              >
                                {item.name}
                              </Link>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleRemove(item.id)}
                              aria-label={`Remove ${item.name} from cart`}
                              className="shrink-0 text-white/40 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                            >
                              <X size={16} />
                            </button>
                          </div>

                          <p className="mt-1 text-sm text-white/45">
                            ${item.price}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center rounded-full border border-white/10"
                            role="group"
                            aria-label={`Quantity controls for ${item.name}`}
                          >
                            <button
                              type="button"
                              onClick={() => decrease(item.id)}
                              aria-label={`Decrease quantity of ${item.name}`}
                              className="grid h-8 w-8 place-items-center text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                            >
                              <Minus size={14} />
                            </button>

                            <output className="w-8 text-center text-sm tabular-nums">
                              {item.quantity}
                            </output>

                            <button
                              type="button"
                              onClick={() => increase(item.id)}
                              aria-label={`Increase quantity of ${item.name}`}
                              className="grid h-8 w-8 place-items-center text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <p className="text-sm font-medium text-white/70">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              <footer className="flex flex-col items-end gap-6">
                <div className="flex w-full max-w-xs justify-between text-lg">
                  <span className="text-white/60">Subtotal</span>
                  <span className="font-medium">${subtotal()}</span>
                </div>

                <div className="flex w-full max-w-xs flex-col gap-3">
                  <Button
                    type="button"
                    fullWidth
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-sm text-white/40 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  >
                    Clear bag
                  </button>
                </div>
              </footer>
            </div>
          )}
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default CartPage