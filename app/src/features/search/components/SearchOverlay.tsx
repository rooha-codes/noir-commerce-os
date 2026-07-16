import { useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useUIStore } from "@/store/ui-store"
import { useProductSearch } from "@/features/search/hooks/useProductSearch"
import { SearchResultItem } from "@/features/search/components/SearchResultItem"

export function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUIStore()
  const { query, setQuery, results, hasQuery } = useProductSearch()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden"
      const timer = setTimeout(() => inputRef.current?.focus(), 50)
      return () => {
        document.body.style.overflow = ""
        clearTimeout(timer)
      }
    }
    document.body.style.overflow = ""
    return undefined
  }, [isSearchOpen])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSearch()
      }
    }

    if (isSearchOpen) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
    return undefined
  }, [isSearchOpen, closeSearch])

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeSearch}
            className="fixed inset-0 z-80 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search products"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-0 right-0 top-0 z-90 mx-auto max-w-2xl px-4 pt-20 md:pt-28"
          >
            <div className="overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
                <Search size={18} className="shrink-0 text-white/40" aria-hidden="true" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  aria-label="Search products"
                  className="flex-1 bg-transparent text-sm text-white/90 placeholder:text-white/30 focus-visible:outline-none"
                />
                <button
                  onClick={closeSearch}
                  aria-label="Close search"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white/40 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  <X size={16} />
                </button>
              </div>

              <div
                ref={listRef}
                className="max-h-[60vh] overflow-y-auto px-2 py-2"
                role="region"
                aria-label="Search results"
              >
                {!hasQuery && (
                  <div className="px-4 py-10 text-center">
                    <Search
                      size={32}
                      className="mx-auto mb-4 text-white/20"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-white/40">
                      Start typing to search products
                    </p>
                  </div>
                )}

                {hasQuery && results.length === 0 && (
                  <div className="px-4 py-10 text-center">
                    <p className="text-sm text-white/40">
                      No products found for &ldquo;{query.trim()}&rdquo;
                    </p>
                  </div>
                )}

                {hasQuery && results.length > 0 && (
                  <div>
                    <p className="mb-2 px-3 text-xs uppercase tracking-[0.2em] text-white/30">
                      {results.length}{" "}
                      {results.length === 1 ? "Result" : "Results"}
                    </p>
                    <div className="flex flex-col gap-1" role="list">
                      {results.map((product) => (
                        <SearchResultItem
                          key={product.id}
                          product={product}
                          onSelect={closeSearch}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}