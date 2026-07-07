import { SITE } from "@/constants/site"

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-10">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <h2 className="text-4xl font-semibold tracking-[-0.06em]">{SITE.name}</h2>

        <p className="max-w-md text-white/50">{SITE.tagline}</p>
      </div>
    </footer>
  )
}
