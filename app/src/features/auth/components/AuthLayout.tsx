import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/utils/cn"
import { ROUTES } from "@/constants/routes"

type AuthLayoutProps = {
  children: ReactNode
  title: string
  subtitle?: string
  footer?: ReactNode
  className?: string
}

export function AuthLayout({
  children,
  title,
  subtitle,
  footer,
  className,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <div
        className={cn(
          "w-full max-w-md rounded-sm border border-border bg-surface-elevated p-8 md:p-10",
          className,
        )}
      >
        <div className="mb-8 text-center">
          <Link
            to={ROUTES.home}
            className="mb-6 inline-block text-label uppercase tracking-widest text-foreground transition-opacity duration-normal hover:opacity-70"
          >
            NOIR
          </Link>
          <h1 className="text-h3 font-light text-foreground">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-body text-muted">{subtitle}</p>
          )}
        </div>

        {children}

        {footer && (
          <div className="mt-8 border-t border-border pt-6">{footer}</div>
        )}
      </div>
    </div>
  )
}