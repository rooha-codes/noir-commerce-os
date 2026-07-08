import { AnimatePresence, motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { X } from "lucide-react"
import { SITE, NAV_LINKS } from "@/constants/site"
import { cn } from "@/utils/cn"

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            aria-label="Close menu overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm md:hidden"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[90] flex h-screen w-full max-w-[380px] flex-col border-l border-white/10 bg-[#080808] text-white shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <span className="text-xl font-semibold tracking-tight">
                {SITE.name}
              </span>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-6 py-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={onClose}
                    className={cn(
                      "border-b border-white/5 py-4 text-2xl tracking-tight text-white/70 transition hover:text-white",
                      isActive && "text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="border-t border-white/10 px-6 py-6 text-xs uppercase tracking-[0.3em] text-white/40">
              {SITE.tagline}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}