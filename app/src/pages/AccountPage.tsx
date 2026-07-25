import {
  LogOut,
  Package,
  ShoppingBag,
  UserRound,
} from "lucide-react"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { ROUTES } from "@/constants/routes"
import { useAuth } from "@/features/auth"
import { useOrderStore } from "@/features/orders"

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value))
}

function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1)
}

export default function AccountPage() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  const orders = useOrderStore((state) => state.orders)

  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [logoutError, setLogoutError] = useState<string | null>(null)

  const handleLogout = useCallback(async () => {
    setLogoutError(null)
    setIsLoggingOut(true)

    try {
      await signOut()
      navigate(ROUTES.LOGIN, { replace: true })
    } catch {
      setLogoutError("Failed to sign out. Please try again.")
      setIsLoggingOut(false)
    }
  }, [navigate, signOut])

  const displayName =
    (user?.user_metadata?.full_name as string | undefined) ||
    user?.email ||
    "Account"

  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <Container size="wide">
        <div className="mb-10">
          <p className="text-label uppercase tracking-[0.25em] text-muted">
            My Account
          </p>

          <h1 className="mt-3 text-h3 font-light text-foreground">
            Welcome, {displayName}
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-6">
            <div className="rounded-sm border border-border bg-surface-elevated p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-border">
                  <UserRound size={20} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-body font-medium text-foreground">
                    {displayName}
                  </p>

                  <p className="truncate text-body-sm text-muted">
                    {user?.email}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-border pt-6">
                <div>
                  <p className="text-label uppercase text-muted">
                    Email
                  </p>

                  <p className="mt-1 break-all text-body text-foreground">
                    {user?.email}
                  </p>
                </div>

                {user?.user_metadata?.full_name && (
                  <div>
                    <p className="text-label uppercase text-muted">
                      Name
                    </p>

                    <p className="mt-1 text-body text-foreground">
                      {String(user.user_metadata.full_name)}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-sm border border-border bg-surface-elevated p-6">
              <Button
                type="button"
                variant="danger"
                size="md"
                fullWidth
                leftIcon={<LogOut size={17} />}
                onClick={handleLogout}
                disabled={isLoggingOut}
                loading={isLoggingOut}
              >
                Sign Out
              </Button>

              {logoutError && (
                <p className="mt-3 text-body-sm text-danger">
                  {logoutError}
                </p>
              )}
            </div>
          </aside>

          <section>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-label uppercase text-muted">
                  Order History
                </p>

                <h2 className="mt-2 text-h4 font-light text-foreground">
                  Your Orders
                </h2>
              </div>

              <div className="rounded-full border border-border px-4 py-2 text-body-sm text-muted">
                {orders.length} {orders.length === 1 ? "Order" : "Orders"}
              </div>
            </div>

            {orders.length === 0 ? (
              <div className="rounded-sm border border-border bg-surface-elevated p-8 text-center md:p-12">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-border">
                  <ShoppingBag size={23} />
                </div>

                <h3 className="mt-6 text-h5 font-medium text-foreground">
                  No orders yet
                </h3>

                <p className="mx-auto mt-3 max-w-md text-body text-muted">
                  Your placed orders will appear here.
                </p>

                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={() => navigate(ROUTES.SHOP)}
                  className="mt-7"
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <article
                    key={order.id}
                    className="rounded-sm border border-border bg-surface-elevated p-5 md:p-6"
                  >
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border">
                          <Package size={21} />
                        </div>

                        <div>
                          <p className="text-body font-medium text-foreground">
                            {order.id}
                          </p>

                          <p className="mt-1 text-body-sm text-muted">
                            Placed on {formatDate(order.createdAt)}
                          </p>

                          <p className="mt-1 text-body-sm text-muted">
                            {order.items.length}{" "}
                            {order.items.length === 1 ? "item" : "items"}
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2 md:flex md:items-center">
                        <div>
                          <p className="text-label uppercase text-muted">
                            Status
                          </p>

                          <p className="mt-1 text-body text-foreground">
                            {formatStatus(order.status)}
                          </p>
                        </div>

                        <div>
                          <p className="text-label uppercase text-muted">
                            Total
                          </p>

                          <p className="mt-1 text-body font-medium text-foreground">
                            {formatCurrency(order.total)}
                          </p>
                        </div>

                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            navigate(ROUTES.ORDER_DETAILS(order.id))
                          }
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </Container>
    </main>
  )
}