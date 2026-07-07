import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useCartStore } from "@/store/cart-store"

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    increase,
    decrease,
    removeItem,
    subtotal,
    clearCart,
  } = useCartStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            aria-label="Close cart overlay"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[90] flex h-screen w-full max-w-[520px] flex-col border-l border-white/10 bg-[#080808] text-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Your Bag
                </p>
                <h2 className="mt-1 text-2xl font-medium">Shopping Cart</h2>
              </div>

              <button
                onClick={closeCart}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <X size={18} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="grid flex-1 place-items-center px-6 text-center">
                <div>
                  <ShoppingBag className="mx-auto mb-5 text-white/35" size={48} />
                  <h3 className="text-2xl font-medium">Your bag is empty.</h3>
                  <p className="mt-3 text-white/45">
                    Add pieces from the collection to start your order.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  <div className="space-y-5">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-28 w-20 object-cover"
                        />

                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <div className="flex justify-between gap-4">
                              <h3 className="text-sm text-white/90">
                                {item.name}
                              </h3>
                              <button
                                onClick={() => removeItem(item.id)}
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
                                className="grid h-8 w-8 place-items-center"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => increase(item.id)}
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
                </div>

                <div className="border-t border-white/10 p-6">
                  <div className="mb-5 flex justify-between text-lg">
                    <span className="text-white/60">Subtotal</span>
                    <span>${subtotal()}</span>
                  </div>

                  <button className="w-full rounded-full bg-white py-4 text-sm font-medium uppercase tracking-[0.18em] text-black transition hover:scale-[1.01]">
                    Checkout
                  </button>

                  <button
                    onClick={clearCart}
                    className="mt-4 w-full text-sm text-white/40 hover:text-white"
                  >
                    Clear bag
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}