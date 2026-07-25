import { useMemo } from "react"

import { cn } from "@/utils/cn"
import { getShippingPrice } from "../utils/shipping"

import type { CartItem } from "@/types/cart"
import type { DeliveryMethod } from "../utils/shipping"

interface OrderSummaryProps {
  items: CartItem[]
  deliveryMethod: DeliveryMethod
  className?: string
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)
}

export function OrderSummary({
  items,
  deliveryMethod,
  className,
}: OrderSummaryProps) {
  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      ),
    [items],
  )

  const shipping = getShippingPrice(deliveryMethod)
  const total = subtotal + shipping

  return (
    <div
      className={cn(
        "rounded-sm border border-border bg-surface p-6",
        className,
      )}
    >
      <h2 className="text-h5 font-medium text-foreground">
        Order Summary
      </h2>

      <ul className="mt-6 space-y-4">
        {items.map((item) => {
          const itemName =
            "title" in item && typeof item.title === "string"
              ? item.title
              : "name" in item && typeof item.name === "string"
                ? item.name
                : "Product"

          const itemImage =
            "image" in item && typeof item.image === "string"
              ? item.image
              : undefined

          return (
            <li key={item.id} className="flex gap-4">
              {itemImage && (
                <img
                  src={itemImage}
                  alt={itemName}
                  className="h-16 w-16 rounded-xs object-cover"
                />
              )}

              <div className="flex-1">
                <p className="text-body-sm font-medium text-foreground">
                  {itemName}
                </p>

                <p className="text-body-sm text-muted">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="text-body-sm text-foreground">
                {formatCurrency(item.price * item.quantity)}
              </p>
            </li>
          )
        })}
      </ul>

      <div className="mt-6 space-y-2 border-t border-border pt-4">
        <div className="flex justify-between text-body-sm text-muted">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex justify-between text-body-sm text-muted">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? "Free" : formatCurrency(shipping)}
          </span>
        </div>

        <div className="flex justify-between text-body font-medium text-foreground">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  )
}