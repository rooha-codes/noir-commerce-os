import { z } from "zod"
import type { ForgotPasswordFormData } from "../types"

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
}) satisfies z.ZodType<ForgotPasswordFormData>

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>