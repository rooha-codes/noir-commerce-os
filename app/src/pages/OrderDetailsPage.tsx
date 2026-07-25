import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Package,
  Truck,
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

function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1)
}

export default function OrderDetailsPage() {
  const navigate = useNavigate()
  const { orderId } = useParams()

  const order = useOrderStore((state) =>
    orderId
      ? state.orders.find(
          (currentOrder) => currentOrder.id === orderId,
        )
      : undefined,
  )

  if (!order) {
    return (
      <main className="min-h-screen bg-background py-16">
        <Container size="narrow">
          <div className="rounded-sm border border-border bg-surface-elevated p-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-border">
              <Package size={23} />
            </div>

            <h1 className="mt-6 text-h4 font-light text-foreground">
              Order not found
            </h1>

            <p className="mt-3 text-body text-muted">
              This order does not exist or is no longer available.
            </p>

            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={() =>
                navigate(ROUTES.ACCOUNT, {
                  replace: true,
                })
              }
              className="mt-8"
            >
              Back to Account
            </Button>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <Container size="wide">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          leftIcon={<ArrowLeft size={17} />}
          onClick={() => navigate(ROUTES.ACCOUNT)}
        >
          Back to Account
        </Button>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-label uppercase tracking-[0.25em] text-muted">
              Order Details
            </p>

            <h1 className="mt-3 break-all text-h3 font-light text-foreground">
              {order.id}
            </h1>
          </div>

          <div className="rounded-full border border-border px-4 py-2 text-body-sm text-foreground">
            {formatStatus(order.status)}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <section className="space-y-6">
            <div className="rounded-sm border border-border bg-surface-elevated p-6">
              <h2 className="text-h5 font-medium text-foreground">
                Items
              </h2>

              <div className="mt-6 divide-y divide-border">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <div className="h-28 w-24 shrink-0 overflow-hidden bg-background">
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

                        <p className="mt-2 text-body-sm text-muted">
                          Quantity: {item.quantity}
                        </p>

                        <p className="mt-1 text-body-sm text-muted">
                          {formatCurrency(item.price)} each
                        </p>
                      </div>

                      <p className="text-body font-medium text-foreground">
                        {formatCurrency(
                          item.price * item.quantity,
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-border bg-surface-elevated p-6">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0"
                />

                <div>
                  <h2 className="text-h5 font-medium text-foreground">
                    Shipping Address
                  </h2>

                  <p className="mt-4 text-body leading-7 text-muted">
                    {order.shippingAddress.firstName}{" "}
                    {order.shippingAddress.lastName}
                    <br />
                    {order.shippingAddress.addressLine1}
                    {order.shippingAddress.addressLine2 && (
                      <>
                        <br />
                        {order.shippingAddress.addressLine2}
                      </>
                    )}
                    <br />
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.stateOrProvince}{" "}
                    {order.shippingAddress.postalCode}
                    <br />
                    {order.shippingAddress.country}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-sm border border-border bg-surface-elevated p-6">
              <h2 className="text-h5 font-medium text-foreground">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-body text-muted">
                  <span>Subtotal</span>
                  <span>{formatCurrency(order.subtotal)}</span>
                </div>

                <div className="flex justify-between text-body text-muted">
                  <span>Shipping</span>
                  <span>
                    {order.shippingCost === 0
                      ? "Free"
                      : formatCurrency(order.shippingCost)}
                  </span>
                </div>

                <div className="flex justify-between border-t border-border pt-4 text-body font-medium text-foreground">
                  <span>Total</span>
                  <span>{formatCurrency(order.total)}</span>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-border bg-surface-elevated p-6">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CalendarDays
                    size={19}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="text-label uppercase text-muted">
                      Order Date
                    </p>

                    <p className="mt-1 text-body text-foreground">
                      {formatDate(order.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck
                    size={19}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="text-label uppercase text-muted">
                      Estimated Delivery
                    </p>

                    <p className="mt-1 text-body text-foreground">
                      {formatDate(order.estimatedDelivery)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Package
                    size={19}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="text-label uppercase text-muted">
                      Delivery Method
                    </p>

                    <p className="mt-1 capitalize text-body text-foreground">
                      {order.shippingAddress.deliveryMethod}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  )
}