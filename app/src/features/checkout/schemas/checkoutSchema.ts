import { z } from "zod"

export const checkoutSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .trim(),

  firstName: z
    .string()
    .min(1, "First name is required")
    .max(100, "First name is too long")
    .trim(),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(100, "Last name is too long")
    .trim(),

  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .trim(),

  addressLine1: z
    .string()
    .min(1, "Address is required")
    .max(200, "Address is too long")
    .trim(),

  addressLine2: z
    .string()
    .max(200, "Address line 2 is too long")
    .trim()
    .optional()
    .default(""),

  city: z
    .string()
    .min(1, "City is required")
    .max(100, "City name is too long")
    .trim(),

  stateOrProvince: z
    .string()
    .min(1, "State or province is required")
    .max(100, "State or province name is too long")
    .trim(),

  postalCode: z
    .string()
    .min(1, "Postal code is required")
    .max(20, "Postal code is too long")
    .trim(),

  country: z
    .string()
    .min(1, "Country is required")
    .max(100, "Country name is too long")
    .trim(),

  deliveryMethod: z.enum(["standard", "express"] as const, {
    message: "Please select a valid delivery method",
  }),
})
export type CheckoutFormInput = z.input<typeof checkoutSchema>
export type CheckoutSchema = z.output<typeof checkoutSchema>