import { create } from "zustand"
import { persist } from "zustand/middleware"

import type {
  CreateOrderInput,
  Order,
} from "@/features/orders/types"

type OrderStore = {
  orders: Order[]
  createOrder: (input: CreateOrderInput) => Order
  getOrderById: (id: string) => Order | undefined
  clearOrders: () => void
}

function generateOrderId() {
  const timestamp = Date.now().toString().slice(-8)
  const randomPart = Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase()

  return `NOIR-${timestamp}-${randomPart}`
}

function getEstimatedDelivery(deliveryMethod: "standard" | "express") {
  const deliveryDate = new Date()

  const deliveryDays =
    deliveryMethod === "express" ? 3 : 7

  deliveryDate.setDate(
    deliveryDate.getDate() + deliveryDays,
  )

  return deliveryDate.toISOString()
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],

      createOrder: ({ items, shippingAddress }) => {
        const subtotal = items.reduce(
          (total, item) =>
            total + item.price * item.quantity,
          0,
        )

        const shippingCost =
          shippingAddress.deliveryMethod === "express"
            ? 25
            : 0

        const order: Order = {
          id: generateOrderId(),
          items,
          shippingAddress,
          subtotal,
          shippingCost,
          total: subtotal + shippingCost,
          status: "processing",
          createdAt: new Date().toISOString(),
          estimatedDelivery: getEstimatedDelivery(
            shippingAddress.deliveryMethod,
          ),
        }

        set({
          orders: [order, ...get().orders],
        })

        return order
      },

      getOrderById: (id) =>
        get().orders.find((order) => order.id === id),

      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: "noir-orders",
    },
  ),
)