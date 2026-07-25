import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { PageLoader } from "@/components/ui/PageLoader"
import { GuestRoute } from "@/features/auth/components/GuestRoute"
import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute"

const HomePage = lazy(() => import("@/pages/HomePage"))
const ShopPage = lazy(() => import("@/pages/ShopPage"))
const CollectionsPage = lazy(() => import("@/pages/CollectionsPage"))
const AboutPage = lazy(() => import("@/pages/AboutPage"))
const JournalPage = lazy(() => import("@/pages/JournalPage"))
const CartPage = lazy(() => import("@/pages/CartPage"))
const WishlistPage = lazy(() => import("@/pages/WishlistPage"))
const LoginPage = lazy(() => import("@/pages/LoginPage"))
const SignupPage = lazy(() => import("@/pages/SignupPage"))

const ForgotPasswordPage = lazy(
  () => import("@/pages/ForgotPasswordPage"),
)

const ResetPasswordPage = lazy(
  () => import("@/pages/ResetPasswordPage"),
)

const AccountPage = lazy(() => import("@/pages/AccountPage"))
const CheckoutPage = lazy(() => import("@/pages/CheckoutPage"))

const OrderSuccessPage = lazy(
  () => import("@/pages/OrderSuccessPage"),
)

const OrderDetailsPage = lazy(
  () => import("@/pages/OrderDetailsPage"),
)

const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"))

const ProductPage = lazy(async () => {
  const module = await import("@/pages/ProductPage")

  return {
    default: module.ProductPage,
  }
})

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />

        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          />

          <Route
            path="/reset-password"
            element={<ResetPasswordPage />}
          />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<AccountPage />} />

          <Route
            path="/account/orders/:orderId"
            element={<OrderDetailsPage />}
          />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route
            path="/order-success/:orderId"
            element={<OrderSuccessPage />}
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}