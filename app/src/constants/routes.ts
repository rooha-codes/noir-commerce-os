export const ROUTES = {
  home: "/",
  shop: "/shop",
  collections: "/collections",
  about: "/about",
  journal: "/journal",
  cart: "/cart",
  product: (slug: string) => `/product/${slug}`,
} as const