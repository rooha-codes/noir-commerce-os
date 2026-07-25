export const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  COLLECTIONS: "/collections",
  ABOUT: "/about",
  JOURNAL: "/journal",
  CART: "/cart",
  WISHLIST: "/wishlist",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  ACCOUNT: "/account",
  CHECKOUT: "/checkout",

  ORDER_SUCCESS: (orderId: string) =>
    `/order-success/${orderId}`,

  ORDER_DETAILS: (orderId: string) =>
    `/account/orders/${orderId}`,

  PRODUCT: (slug: string) =>
    `/product/${slug}`,

  home: "/",
  shop: "/shop",
  collections: "/collections",
  about: "/about",
  journal: "/journal",
  cart: "/cart",
  wishlist: "/wishlist",
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  account: "/account",
  checkout: "/checkout",

  orderSuccess: (orderId: string) =>
    `/order-success/${orderId}`,

  orderDetails: (orderId: string) =>
    `/account/orders/${orderId}`,

  product: (slug: string) =>
    `/product/${slug}`,
} as const