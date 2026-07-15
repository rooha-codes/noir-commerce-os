import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import { cn } from "@/utils/cn"
import { RootLayout } from "@/components/layout/RootLayout"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { EmptyState } from "@/components/ui/EmptyState"
import { Button } from "@/components/ui/Button"
import { ROUTES } from "@/constants/routes"
import { useCart } from "@/features/cart"

export function CartPage() {
  const { items, increase, decrease, removeItem, subtotal, count, clearCart } =
    useCart()

  return (
    <RootLayout navbar="home" showFooter>
      <Section spacing="lg" className="pt-32">
        <Container size="narrow">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
              Your Bag
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Shopping Cart
            </h1>
            {items.length > 0 && (
              <p className="mt-3 text-sm text-white/45">
                {count()} {count() === 1 ? "item" : "items"}
              </p>
            )}
          </div>

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
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
              {/* Cart Items */}
              <div className="flex-1">
                <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-5 py-6">
                      <Link
                        to={ROUTES.product(item.slug)}
                        className="h-36 w-28 shrink-0 overflow-hidden bg-white/5"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
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
                                className="text-base text-white/90 hover:underline"
                              >
                                {item.name}
                              </Link>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.name} from cart`}
                              className="text-white/40 hover:text-white"
                            >
                              <X size={16} />
                            </button>
                          </div>

                          <p className="mt-1 text-sm text-white/45">
                            ${item.price}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-white/10">
                            <button
                              onClick={() => decrease(item.id)}
                              aria-label={`Decrease quantity of ${item.name}`}
                              className="grid h-8 w-8 place-items-center"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => increase(item.id)}
                              aria-label={`Increase quantity of ${item.name}`}
                              className="grid h-8 w-8 place-items-center"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <p className="text-sm text-white/70">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to={ROUTES.shop}
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    ← Continue Shopping
                  </Link>
                  <button
                    onClick={clearCart}
                    className="text-sm text-white/40 hover:text-white"
                  >
                    Clear bag
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="w-full lg:max-w-sm">
                <div className="sticky top-32 border border-white/10 bg-white/[0.02] p-6">
                  <h2 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                    Order Summary
                  </h2>

                  <div className="space-y-4 border-b border-white/10 pb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/45">Subtotal</span>
                      <span className="text-white/80">${subtotal()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/45">Estimated Shipping</span>
                      <span className="text-white/80">Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between text-lg font-medium">
                    <span className="text-white/60">Total</span>
                    <span>${subtotal()}</span>
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    <Button fullWidth disabled>
                      Checkout — Coming Soon
                    </Button>
                    <p className="text-center text-xs text-white/30">
                      Shipping and taxes calculated at checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </Section>

      <CartDrawer />
    </RootLayout>
  )
}

export default CartPage