import { ProductCard } from "@/components/commerce/ProductCard"
import { useRelatedProducts } from "@/features/products/hooks/useRelatedProducts"

type RelatedProductsSectionProps = {
  productId: string
}

export function RelatedProductsSection({ productId }: RelatedProductsSectionProps) {
  const related = useRelatedProducts(productId)

  return (
    <section className="border-t border-white/10 px-5 py-20 md:px-10">
      <h2 className="mb-10 text-4xl font-medium tracking-[-0.05em]">
        Related Pieces
      </h2>
      <div className="grid gap-5 md:grid-cols-3">
        {related.map((item, index) => (
          <ProductCard key={item.id} product={item} index={index} />
        ))}
      </div>
    </section>
  )
}
