import { Route, Routes } from "react-router-dom"

import AboutPage from "@/pages/AboutPage"
import CartPage from "@/pages/CartPage"
import CollectionsPage from "@/pages/CollectionsPage"
import ForgotPasswordPage from "@/pages/ForgotPasswordPage"
import HomePage from "@/pages/HomePage"
import JournalPage from "@/pages/JournalPage"
import LoginPage from "@/pages/LoginPage"
import NotFoundPage from "@/pages/NotFoundPage"
import { ProductPage } from "@/pages/ProductPage"
import ResetPasswordPage from "@/pages/ResetPasswordPage"
import ShopPage from "@/pages/ShopPage"
import SignupPage from "@/pages/SignupPage"
import WishlistPage from "@/pages/WishlistPage"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/collections" element={<CollectionsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/product/:slug" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}