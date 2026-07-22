import { z } from "zod"

import type { SignupFormData } from "@/features/auth/types"

export const signupSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, "Email is required.")
      .email("Enter a valid email address."),

    password: z
      .string()
      .min(8, "Password must contain at least 8 characters.")
      .regex(/[A-Z]/, "Password must include an uppercase letter.")
      .regex(/[a-z]/, "Password must include a lowercase letter.")
      .regex(/[0-9]/, "Password must include a number."),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password."),

    acceptTerms: z
      .boolean()
      .refine((accepted) => accepted, {
        message: "You must accept the terms and privacy policy.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  }) satisfies z.ZodType<SignupFormData>

export type SignupSchemaInput = z.input<typeof signupSchema>
export type SignupSchemaOutput = z.output<typeof signupSchema>
export type SignupSchema = z.infer<typeof signupSchema>