export const ROUTES = {
  home: "/",
  product: (slug: string) => `/product/${slug}`,
} as const
