import {
  useCallback,
  useEffect,
  useState,
} from "react"
import { useNavigate } from "react-router-dom"

import { Container } from "@/components/ui/Container"
import { ROUTES } from "@/constants/routes"
import { useAuth } from "@/features/auth"
import { useCartStore } from "@/features/cart"
import { useOrderStore } from "@/features/orders"

import {
  CheckoutForm,
  CheckoutReview,
  useCheckoutStore,
} from "@/features/checkout"

import type { CheckoutSchema } from "@/features/checkout"

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const cartItems = useCartStore(
    (state) => state.items,
  )

  const closeCart = useCartStore(
    (state) => state.closeCart,
  )

  const clearCart = useCartStore(
    (state) => state.clearCart,
  )

  const createOrder = useOrderStore(
    (state) => state.createOrder,
  )

  const {
    step,
    shippingData,
    setStep,
    setShippingData,
    reset,
  } = useCheckoutStore()

  const [notice, setNotice] = useState<string | null>(
    null,
  )

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const isCartEmpty = cartItems.length === 0

  useEffect(() => {
    closeCart()
  }, [closeCart])

  useEffect(() => {
    if (isCartEmpty) {
      navigate(ROUTES.CART, {
        replace: true,
      })
    }
  }, [isCartEmpty, navigate])

  const handleShippingSubmit = useCallback(
    (data: CheckoutSchema) => {
      setShippingData({
        ...data,
        addressLine2: data.addressLine2 ?? "",
      })

      setNotice(null)
      setStep("review")
    },
    [setShippingData, setStep],
  )

  const handleBack = useCallback(() => {
    setNotice(null)
    setStep("shipping")
  }, [setStep])

  const handlePlaceOrder = useCallback(() => {
    if (!shippingData || cartItems.length === 0) {
      setNotice(
        "Your shipping details or cart items are missing.",
      )
      return
    }

    try {
      setIsSubmitting(true)
      setNotice(null)

      const order = createOrder({
        items: cartItems.map((item) => ({
          ...item,
        })),
        shippingAddress: {
          ...shippingData,
          addressLine2:
            shippingData.addressLine2 ?? "",
        },
      })

      navigate(ROUTES.ORDER_SUCCESS(order.id), {
        replace: true,
      })

      clearCart()
      reset()
    } catch {
      setNotice(
        "We could not place your order. Please try again.",
      )

      setIsSubmitting(false)
    }
  }, [
    cartItems,
    clearCart,
    createOrder,
    navigate,
    reset,
    shippingData,
  ])

  const defaultEmail = user?.email ?? ""

  if (isCartEmpty) {
    return null
  }

  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <Container size="narrow">
        <div className="mb-8">
          <h1 className="text-h3 font-light text-foreground">
            Checkout
          </h1>

          {defaultEmail && (
            <p className="mt-1 text-body text-muted">
              Signed in as {defaultEmail}
            </p>
          )}
        </div>

        {step === "shipping" && (
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <CheckoutForm
                defaultEmail={defaultEmail}
                onSubmit={handleShippingSubmit}
                isSubmitting={isSubmitting}
              />
            </div>

            <div className="lg:w-96" />
          </div>
        )}

        {step === "review" && shippingData && (
          <CheckoutReview
            shippingData={shippingData}
            cartItems={cartItems}
            onBack={handleBack}
            onContinue={handlePlaceOrder}
            isSubmitting={isSubmitting}
            notice={notice}
          />
        )}
      </Container>
    </main>
  )
}