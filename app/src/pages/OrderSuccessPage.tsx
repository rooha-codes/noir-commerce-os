import {
  Check,
  PackageCheck,
  ShoppingBag,
} from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { ROUTES } from "@/constants/routes"
import { useOrderStore } from "@/features/orders"

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value))
}

export default function OrderSuccessPage() {
  const navigate = useNavigate()
  const { orderId } = useParams()

  const order = useOrderStore((state) =>
    orderId
      ? state.orders.find(
          (currentOrder) =>
            currentOrder.id === orderId,
        )
      : undefined,
  )

  if (!order) {
    return (
      <main className="min-h-screen bg-background py-16">
        <Container size="narrow">
          <div className="mx-auto max-w-xl rounded-sm border border-border bg-surface p-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-border">
              <PackageCheck size={24} />
            </div>

            <h1 className="mt-6 text-h4 font-light text-foreground">
              Order not found
            </h1>

            <p className="mt-3 text-body text-muted">
              We could not find the requested order.
            </p>

            <Button
              type="button"
              variant="primary"
              size="md"
              fullWidth
              onClick={() =>
                navigate(ROUTES.SHOP, {
                  replace: true,
                })
              }
              className="mt-8"
            >
              Continue Shopping
            </Button>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <Container size="narrow">
        <section className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-foreground text-background">
              <Check size={28} strokeWidth={1.8} />
            </div>

            <p className="mt-6 text-label uppercase tracking-[0.3em] text-muted">
              Order Confirmed
            </p>

            <h1 className="mt-3 text-h3 font-light text-foreground">
              Thank you for your order
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-body text-muted">
              Your order has been received and is now
              being prepared.
            </p>
          </div>

          <div className="mt-10 rounded-sm border border-border bg-surface p-6 md:p-8">
            <div className="grid gap-6 border-b border-border pb-6 sm:grid-cols-3">
              <div>
                <p className="text-label uppercase text-muted">
                  Order Number
                </p>

                <p className="mt-2 break-all text-body font-medium text-foreground">
                  {order.id}
                </p>
              </div>

              <div>
                <p className="text-label uppercase text-muted">
                  Order Date
                </p>

                <p className="mt-2 text-body text-foreground">
                  {formatDate(order.createdAt)}
                </p>
              </div>

              <div>
                <p className="text-label uppercase text-muted">
                  Estimated Delivery
                </p>

                <p className="mt-2 text-body text-foreground">
                  {formatDate(
                    order.estimatedDelivery,
                  )}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-h5 font-medium text-foreground">
                Order Summary
              </h2>

              <div className="mt-5 space-y-5">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4"
                  >
                    <div className="h-24 w-20 shrink-0 overflow-hidden bg-background">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 justify-between gap-4">
                      <div>
                        <p className="text-body font-medium text-foreground">
                          {item.name}
                        </p>

                        <p className="mt-1 text-body-sm text-muted">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="text-body text-foreground">
                        {formatCurrency(
                          item.price * item.quantity,
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3 border-t border-border pt-6">
                <div className="flex justify-between text-body text-muted">
                  <span>Subtotal</span>
                  <span>
                    {formatCurrency(order.subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-body text-muted">
                  <span>Shipping</span>
                  <span>
                    {order.shippingCost === 0
                      ? "Free"
                      : formatCurrency(
                          order.shippingCost,
                        )}
                  </span>
                </div>

                <div className="flex justify-between border-t border-border pt-4 text-body font-medium text-foreground">
                  <span>Total</span>
                  <span>
                    {formatCurrency(order.total)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button
              type="button"
              variant="primary"
              size="md"
              fullWidth
              onClick={() => navigate(ROUTES.SHOP)}
            >
              <ShoppingBag size={17} />
              Continue Shopping
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="md"
              fullWidth
              onClick={() => navigate(ROUTES.ACCOUNT)}
            >
              <PackageCheck size={17} />
              View Account
            </Button>
          </div>
        </section>
      </Container>
    </main>
  )
}