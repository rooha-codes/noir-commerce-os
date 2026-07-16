export const ROUTES = {
  home: "/",
  shop: "/shop",
  collections: "/collections",
  about: "/about",
  journal: "/journal",
  cart: "/cart",
  wishlist: "/wishlist",
  product: (slug: string) => `/product/${slug}`,
} as const