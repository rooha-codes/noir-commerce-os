import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

import { checkoutSchema } from "../schemas/checkoutSchema"
import { DELIVERY_OPTIONS } from "../utils/shipping"

import type {
  CheckoutFormInput,
  CheckoutSchema,
} from "../schemas/checkoutSchema"

interface CheckoutFormProps {
  defaultEmail?: string
  onSubmit: (data: CheckoutSchema) => void
  isSubmitting?: boolean
}

export function CheckoutForm({
  defaultEmail = "",
  onSubmit,
  isSubmitting = false,
}: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormInput, unknown, CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    mode: "onBlur",
    defaultValues: {
      email: defaultEmail,
      addressLine2: "",
      deliveryMethod: "standard",
    },
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      aria-busy={isSubmitting}
    >
      <Input
        {...register("email")}
        type="email"
        label="Email"
        placeholder="you@example.com"
        autoComplete="email"
        error={errors.email?.message}
        fullWidth
        disabled={isSubmitting}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          {...register("firstName")}
          label="First Name"
          placeholder="Jane"
          autoComplete="given-name"
          error={errors.firstName?.message}
          fullWidth
          disabled={isSubmitting}
        />

        <Input
          {...register("lastName")}
          label="Last Name"
          placeholder="Doe"
          autoComplete="family-name"
          error={errors.lastName?.message}
          fullWidth
          disabled={isSubmitting}
        />
      </div>

      <Input
        {...register("phone")}
        type="tel"
        label="Phone"
        placeholder="+1 555 123 4567"
        autoComplete="tel"
        error={errors.phone?.message}
        fullWidth
        disabled={isSubmitting}
      />

      <Input
        {...register("addressLine1")}
        label="Address"
        placeholder="123 Main Street"
        autoComplete="address-line1"
        error={errors.addressLine1?.message}
        fullWidth
        disabled={isSubmitting}
      />

      <Input
        {...register("addressLine2")}
        label="Apartment, suite, etc. (optional)"
        placeholder="Apt 4B"
        autoComplete="address-line2"
        error={errors.addressLine2?.message}
        fullWidth
        disabled={isSubmitting}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          {...register("city")}
          label="City"
          placeholder="New York"
          autoComplete="address-level2"
          error={errors.city?.message}
          fullWidth
          disabled={isSubmitting}
        />

        <Input
          {...register("stateOrProvince")}
          label="State / Province"
          placeholder="NY"
          autoComplete="address-level1"
          error={errors.stateOrProvince?.message}
          fullWidth
          disabled={isSubmitting}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          {...register("postalCode")}
          label="Postal Code"
          placeholder="10001"
          autoComplete="postal-code"
          error={errors.postalCode?.message}
          fullWidth
          disabled={isSubmitting}
        />

        <Input
          {...register("country")}
          label="Country"
          placeholder="United States"
          autoComplete="country-name"
          error={errors.country?.message}
          fullWidth
          disabled={isSubmitting}
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="text-label uppercase text-muted">
          Delivery Method
        </legend>

        {errors.deliveryMethod?.message && (
          <p className="text-body-sm text-danger">
            {errors.deliveryMethod.message}
          </p>
        )}

        <div className="space-y-2">
          {DELIVERY_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 rounded-sm border border-border bg-surface p-4 transition-colors hover:bg-surface-elevated has-checked:border-primary"
            >
              <input
                {...register("deliveryMethod")}
                type="radio"
                value={option.value}
                disabled={isSubmitting}
                className="h-4 w-4 accent-primary"
              />

              <div className="flex-1">
                <p className="text-body-sm font-medium text-foreground">
                  {option.label}
                </p>

                <p className="text-body-sm text-muted">
                  {option.description}
                </p>
              </div>

              <p className="text-body-sm text-foreground">
                {option.price === 0 ? "Free" : `$${option.price}`}
              </p>
            </label>
          ))}
        </div>
      </fieldset>

      <Button
        type="submit"
        variant="primary"
        size="md"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        Continue to Review
      </Button>
    </form>
  )
}