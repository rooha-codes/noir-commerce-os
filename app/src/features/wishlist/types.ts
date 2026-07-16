export type WishlistStore = {
  ids: string[]
  add: (id: string) => void
  remove: (id: string) => void
  toggle: (id: string) => void
  clear: () => void
  has: (id: string) => boolean
  count: () => number
}