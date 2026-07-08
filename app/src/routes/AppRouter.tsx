import { BrowserRouter, Route, Routes } from "react-router-dom"

import AboutPage from "@/pages/AboutPage"
import CartPage from "../pages/CartPage"
import CollectionsPage from "@/pages/CollectionsPage"
import HomePage from "@/pages/HomePage"
import JournalPage from "@/pages/JournalPage"
import NotFoundPage from "@/pages/NotFoundPage"
import { ProductPage } from "@/pages/ProductPage"
import ShopPage from "@/pages/ShopPage"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}