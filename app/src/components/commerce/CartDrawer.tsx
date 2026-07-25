import { useState, useCallback } from "react"
import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

import { useCart } from "@/features/cart"
import { ROUTES } from "@/constants/routes"
import { cn } from "@/utils/cn"
import { ImageSkeleton } from "@/components/ui/ImageSkeleton"

function DrawerItemImage({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative h-28 w-20 shrink-0 overflow-hidden bg-white/5">
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

export function CartDrawer() {
  const navigate = useNavigate()

  const {
    items,
    isOpen,
    closeCart,
    increase,
    decrease,
    removeItem,
    subtotal,
    clearCart,
  } = useCart()

  const handleClose = useCallback(() => {
    closeCart()
  }, [closeCart])

  const handleCheckout = useCallback(() => {
    closeCart()
    navigate(ROUTES.CHECKOUT)
  }, [closeCart, navigate])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart overlay"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-80 bg-black/70 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed right-0 top-0 z-90 flex h-screen w-full max-w-130 flex-col border-l border-white/10 bg-[#080808] text-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <header className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Your Bag
                </p>

                <h2 className="mt-1 text-2xl font-medium">
                  Shopping Cart
                </h2>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close cart"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                <X size={18} />
              </button>
            </header>

            {items.length === 0 ? (
              <div className="grid flex-1 place-items-center px-6 text-center">
                <div>
                  <ShoppingBag
                    className="mx-auto mb-5 text-white/35"
                    size={48}
                    aria-hidden="true"
                  />

                  <h3 className="text-2xl font-medium">
                    Your bag is empty.
                  </h3>

                  <p className="mt-3 text-white/45">
                    Add pieces from the collection to start your order.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  <ul
                    className="space-y-5"
                    aria-label="Cart items"
                  >
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.li
                          key={item.id}
                          layout
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            x: -20,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="flex gap-4"
                        >
                          <Link
                            to={ROUTES.product(item.slug)}
                            onClick={handleClose}
                            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                          >
                            <DrawerItemImage
                              src={item.image}
                              alt={item.name}
                            />
                          </Link>

                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <div className="flex justify-between gap-4">
                                <h3 className="text-sm text-white/90">
                                  <Link
                                    to={ROUTES.product(item.slug)}
                                    onClick={handleClose}
                                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                                  >
                                    {item.name}
                                  </Link>
                                </h3>

                                <button
                                  type="button"
                                  onClick={() =>
                                    removeItem(item.id)
                                  }
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
                                  onClick={() =>
                                    decrease(item.id)
                                  }
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
                                  onClick={() =>
                                    increase(item.id)
                                  }
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
                </div>

                <footer className="border-t border-white/10 p-6">
                  <div className="mb-5 flex justify-between text-lg">
                    <span className="text-white/60">
                      Subtotal
                    </span>

                    <span className="font-medium">
                      ${subtotal()}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="w-full rounded-full bg-white py-4 text-sm font-medium uppercase tracking-[0.18em] text-black transition hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    Checkout
                  </button>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="mt-4 w-full text-sm text-white/40 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  >
                    Clear bag
                  </button>
                </footer>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}