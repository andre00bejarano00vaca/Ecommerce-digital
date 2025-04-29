import Image from "next/image"
import { getProduct, getRelatedProducts } from "@/lib/products"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductGrid from "@/components/product-grid"

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id)
  const relatedProducts = await getRelatedProducts(params.id)

  if (!product) {
    return <div className="container mx-auto px-4 py-12">Producto no encontrado</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-green-600 mb-4">${product.price.toFixed(2)}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Descripción</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <AddToCartButton product={product} />

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Características</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {product.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
        <ProductGrid products={relatedProducts} />
      </div>
    </div>
  )
}
