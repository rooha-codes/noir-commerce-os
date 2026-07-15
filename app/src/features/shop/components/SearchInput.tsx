import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/Input"

type SearchInputProps = {
  value: string
  onChange: (value: string) => void
}

/**
 * Reuses the shared `Input` primitive (same border/focus/disabled styling
 * as every other form field in the app) with a leading search icon and a
 * trailing clear button layered on top via absolute positioning, so no
 * changes are needed to the shared component itself.
 */
export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative w-full sm:w-72">
      <Search
        size={16}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-soft"
      />

      <Input
        type="search"
        aria-label="Search products"
        placeholder="Search products…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="pl-11 pr-10 [&::-webkit-search-cancel-button]:appearance-none"
        fullWidth
      />

      {value.length > 0 && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-muted-soft transition hover:bg-white/10 hover:text-foreground"
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}