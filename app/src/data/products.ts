export type Product = {
  id: string
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: "coat-01",
    name: "Structured Oversized Coat",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "shirt-01",
    name: "Essential Black Shirt",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "trouser-01",
    name: "Minimal Tailored Trouser",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tee-01",
    name: "Everyday Heavy Cotton Tee",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
]