import { Button } from "@/components/ui/Button"
import { OrderSummary } from "./OrderSummary"
import { DELIVERY_OPTIONS } from "../utils/shipping"

import type { CartItem } from "@/types/cart"
import type { DeliveryMethod } from "../utils/shipping"

interface ShippingData {
  email: string
  firstName: string
  lastName: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  stateOrProvince: string
  postalCode: string
  country: string
  deliveryMethod: DeliveryMethod
}

interface CheckoutReviewProps {
  shippingData: ShippingData
  cartItems: CartItem[]
  onBack: () => void
  onContinue: () => void
  isSubmitting?: boolean
  notice?: string | null
}

export function CheckoutReview({
  shippingData,
  cartItems,
  onBack,
  onContinue,
  isSubmitting = false,
  notice,
}: CheckoutReviewProps) {
  const deliveryLabel =
    DELIVERY_OPTIONS.find(
      (option) =>
        option.value === shippingData.deliveryMethod,
    )?.label ?? shippingData.deliveryMethod

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="flex-1 space-y-6">
        <div className="rounded-sm border border-border bg-surface p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-h5 font-medium text-foreground">
              Shipping Details
            </h2>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onBack}
              disabled={isSubmitting}
            >
              Edit
            </Button>
          </div>

          <dl className="mt-4 space-y-4">
            <div>
              <dt className="text-label uppercase text-muted">
                Contact
              </dt>

              <dd className="text-body text-foreground">
                {shippingData.email} — {shippingData.phone}
              </dd>
            </div>

            <div>
              <dt className="text-label uppercase text-muted">
                Ship to
              </dt>

              <dd className="text-body text-foreground">
                {shippingData.firstName}{" "}
                {shippingData.lastName}
                <br />

                {shippingData.addressLine1}

                {shippingData.addressLine2 && (
                  <>
                    <br />
                    {shippingData.addressLine2}
                  </>
                )}

                <br />

                {shippingData.city},{" "}
                {shippingData.stateOrProvince}{" "}
                {shippingData.postalCode}

                <br />

                {shippingData.country}
              </dd>
            </div>

            <div>
              <dt className="text-label uppercase text-muted">
                Delivery Method
              </dt>

              <dd className="text-body text-foreground">
                {deliveryLabel}
              </dd>
            </div>
          </dl>
        </div>

        <Button
          type="button"
          variant="primary"
          size="md"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
          onClick={onContinue}
        >
          Place Order
        </Button>

        {notice && (
          <p className="text-center text-body-sm text-muted">
            {notice}
          </p>
        )}
      </div>

      <div className="lg:w-96">
        <OrderSummary
          items={cartItems}
          deliveryMethod={shippingData.deliveryMethod}
        />
      </div>
    </div>
  )
}