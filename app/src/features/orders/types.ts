import type { CartItem } from "@/types/cart"
import type { DeliveryMethod } from "@/features/checkout/utils/shipping"

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"

export type OrderShippingAddress = {
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
}

export type Order = {
  id: string
  items: CartItem[]
  shippingAddress: OrderShippingAddress
  subtotal: number
  shippingCost: number
  total: number
  status: OrderStatus
  createdAt: string
  estimatedDelivery: string
}

export type CreateOrderInput = {
  items: CartItem[]
  shippingAddress: OrderShippingAddress
}