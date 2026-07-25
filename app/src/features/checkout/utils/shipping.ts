export type DeliveryMethod = "standard" | "express"

export const DELIVERY_OPTIONS: {
  value: DeliveryMethod
  label: string
  description: string
  price: number
}[] = [
  {
    value: "standard",
    label: "Standard Delivery",
    description: "3–5 business days",
    price: 0,
  },
  {
    value: "express",
    label: "Express Delivery",
    description: "1–2 business days",
    price: 15,
  },
]

export function getShippingPrice(method: DeliveryMethod): number {
  return method === "express" ? 15 : 0
}