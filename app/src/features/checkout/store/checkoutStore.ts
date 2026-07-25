import { create } from "zustand"
import type { DeliveryMethod } from "../utils/shipping"

export type CheckoutStep = "shipping" | "review"

interface CheckoutState {
  step: CheckoutStep
  shippingData: {
    email: string
    firstName: string
    lastName: string
    phone: string
    addressLine1: string
    addressLine2: string
    city: string
    stateOrProvince: string
    postalCode: string
    country: string
    deliveryMethod: DeliveryMethod
  } | null
  setStep: (step: CheckoutStep) => void
  setShippingData: (data: CheckoutState["shippingData"]) => void
  reset: () => void
}

const initialState = {
  step: "shipping" as CheckoutStep,
  shippingData: null,
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  ...initialState,
  setStep: (step) => set({ step }),
  setShippingData: (shippingData) => set({ shippingData }),
  reset: () => set(initialState),
}))