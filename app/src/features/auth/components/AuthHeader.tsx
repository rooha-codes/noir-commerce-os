import { Link } from "react-router-dom"
import { cn } from "@/utils/cn"
import { ROUTES } from "@/constants/routes"

type AuthHeaderProps = {
  title: string
  subtitle?: string
  className?: string
}

export function AuthHeader({ title, subtitle, className }: AuthHeaderProps) {
  return (
    <header className={cn("mb-8 text-center", className)}>
      <Link
        to={ROUTES.home}
        className="mb-6 inline-block text-label uppercase tracking-widest text-foreground transition-opacity duration-normal hover:opacity-70"
      >
        NOIR
      </Link>
      <h1 className="text-h3 font-light text-foreground">{title}</h1>
      {subtitle && <p className="mt-2 text-body text-muted">{subtitle}</p>}
    </header>
  )
}