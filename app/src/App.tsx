import { useLocation } from "react-router-dom"

import { Seo } from "@/components/seo/Seo"
import { AppRouter } from "@/routes/AppRouter"

type PageMetadata = {
  title: string
  description: string
}

function getPageMetadata(pathname: string): PageMetadata {
  if (pathname === "/") {
    return {
      title: "NOIR Commerce | Modern Luxury Fashion",
      description:
        "Discover modern luxury fashion, timeless essentials and thoughtfully designed collections at NOIR Commerce.",
    }
  }

  if (pathname === "/shop") {
    return {
      title: "Shop | NOIR Commerce",
      description:
        "Explore the latest NOIR collection of modern, minimal and timeless fashion pieces.",
    }
  }

  if (pathname === "/collections") {
    return {
      title: "Collections | NOIR Commerce",
      description:
        "Browse curated fashion collections designed with a modern and minimal aesthetic.",
    }
  }

  if (pathname === "/about") {
    return {
      title: "About | NOIR Commerce",
      description:
        "Learn about NOIR Commerce, our design philosophy and our approach to modern luxury.",
    }
  }

  if (pathname === "/journal") {
    return {
      title: "Journal | NOIR Commerce",
      description:
        "Explore stories, inspiration and insights from the world of NOIR Commerce.",
    }
  }

  if (pathname === "/cart") {
    return {
      title: "Shopping Cart | NOIR Commerce",
      description:
        "Review the products currently added to your NOIR Commerce shopping cart.",
    }
  }

  if (pathname === "/wishlist") {
    return {
      title: "Wishlist | NOIR Commerce",
      description:
        "View and manage your saved NOIR Commerce products.",
    }
  }

  if (pathname === "/login") {
    return {
      title: "Sign In | NOIR Commerce",
      description:
        "Sign in to your NOIR Commerce account.",
    }
  }

  if (pathname === "/signup") {
    return {
      title: "Create Account | NOIR Commerce",
      description:
        "Create your NOIR Commerce account and manage your orders and wishlist.",
    }
  }

  if (pathname === "/forgot-password") {
    return {
      title: "Forgot Password | NOIR Commerce",
      description:
        "Request a secure password reset link for your NOIR Commerce account.",
    }
  }

  if (pathname === "/reset-password") {
    return {
      title: "Reset Password | NOIR Commerce",
      description:
        "Create a new password for your NOIR Commerce account.",
    }
  }

  if (pathname === "/account") {
    return {
      title: "My Account | NOIR Commerce",
      description:
        "Manage your NOIR Commerce profile and view your order history.",
    }
  }

  if (pathname === "/checkout") {
    return {
      title: "Checkout | NOIR Commerce",
      description:
        "Complete your NOIR Commerce order securely.",
    }
  }

  if (pathname.startsWith("/account/orders/")) {
    return {
      title: "Order Details | NOIR Commerce",
      description:
        "Review your NOIR Commerce order items, delivery details and total.",
    }
  }

  if (pathname.startsWith("/order-success/")) {
    return {
      title: "Order Confirmed | NOIR Commerce",
      description:
        "Your NOIR Commerce order has been successfully placed.",
    }
  }

  if (pathname.startsWith("/product/")) {
    return {
      title: "Product | NOIR Commerce",
      description:
        "Explore product details, available options and related items at NOIR Commerce.",
    }
  }

  return {
    title: "Page Not Found | NOIR Commerce",
    description:
      "The requested page could not be found.",
  }
}

function App() {
  const location = useLocation()
  const metadata = getPageMetadata(location.pathname)

  return (
    <>
      <Seo
        title={metadata.title}
        description={metadata.description}
      />

      <AppRouter />
    </>
  )
}

export default App