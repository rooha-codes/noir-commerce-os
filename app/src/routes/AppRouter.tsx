import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { ProductPage } from "@/pages/ProductPage"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}