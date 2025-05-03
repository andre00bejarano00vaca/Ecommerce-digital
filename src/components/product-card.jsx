import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "./add-to-cart-button"

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden group">
      <Link href={`/productos/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={`https://filtros.digitaltelecom.online/api/products/${product.image}`|| "/file.svg?height=256&width=256"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/productos/${product.id}`}>
          <h3 className="font-semibold mb-1 hover:text-green-600 transition-colors">{product.title}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{product.category.name}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <AddToCartButton product={product} compact />
        </div>
      </div>
    </div>
  )
}
