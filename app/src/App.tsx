import { ArrowUpRight, Heart, Menu, Search, ShoppingBag } from "lucide-react"
import { motion } from "framer-motion"
import { products } from "@/data/products"
import { ProductCard } from "@/components/commerce/ProductCard"
import { CartDrawer } from "@/components/commerce/CartDrawer"
import { useCartStore } from "@/store/cart-store"

function App() {
  const { count, openCart } = useCartStore()

  return (
    <main className="min-h-screen bg-[#050505] text-[#f6f1e8]">
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl md:px-10">
        <a className="text-xl font-semibold tracking-tight" href="/">
          NOIR®
        </a>

        <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/70 md:flex">
          <a href="#shop">Shop</a>
          <a href="#collection">Collection</a>
          <a href="#story">Story</a>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Search">
            <Search size={19} />
          </button>

          <button aria-label="Wishlist">
            <Heart size={19} />
          </button>

          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative"
          >
            <ShoppingBag size={19} />
            {count() > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-white text-[10px] font-bold text-black">
                {count()}
              </span>
            )}
          </button>

          <button aria-label="Open menu">
            <Menu size={21} />
          </button>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-16">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1800&auto=format&fit=crop"
          alt="Premium fashion campaign"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

        <div className="relative z-10 grid w-full gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/60">
              Premium Clothing
            </p>

            <h1 className="max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.08em] md:text-9xl">
              Designed for quiet confidence.
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-md md:justify-self-end"
          >
            <p className="mb-6 text-lg leading-relaxed text-white/70">
              A premium fashion commerce experience built around strong
              silhouettes, refined motion, and effortless shopping.
            </p>

            <a
              href="#shop"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
            >
              Shop Collection <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="collection" className="px-5 py-24 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
              New Drop
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              The Essential Edit
            </h2>
          </div>

          <p className="hidden max-w-sm text-white/50 md:block">
            Wardrobe pieces built for daily use, refined through fabric,
            proportion, and restraint.
          </p>
        </div>

        <div id="shop" className="grid gap-5 md:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      <section id="story" className="grid min-h-[80vh] md:grid-cols-2">
        <div className="flex items-center px-5 py-20 md:px-10">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/40">
              Philosophy
            </p>

            <h2 className="mb-8 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Less noise. Better shape. Stronger presence.
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-white/55">
              NOIR is built for people who value minimal design, excellent
              construction, and a shopping experience that feels as considered
              as the product itself.
            </p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1506629905607-d9d297d2c4cf?q=80&w=1400&auto=format&fit=crop"
          alt="Editorial clothing detail"
          className="h-full min-h-[500px] w-full object-cover"
        />
      </section>

      <footer className="border-t border-white/10 px-5 py-10 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <h2 className="text-4xl font-semibold tracking-[-0.06em]">NOIR®</h2>

          <p className="max-w-md text-white/50">
            Premium clothing commerce system. Built for luxury brands, fast
            shopping, and refined digital experiences.
          </p>
        </div>
      </footer>

      <CartDrawer />
    </main>
  )
}

export default App