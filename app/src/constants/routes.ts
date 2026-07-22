export const ROUTES = {
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

  product: (slug: string) => `/product/${slug}`,
} as const