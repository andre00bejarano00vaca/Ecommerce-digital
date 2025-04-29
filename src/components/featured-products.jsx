import Image from "next/image"
import Link from "next/link"
import { getCategories } from "@/lib/products"

export default async function CategorySection() {
  const categories = await getCategories()

  // Mostrar solo las primeras 4 categorías en la página de inicio
  const displayCategories = categories.slice(0, 4)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayCategories.map((category) => (
        <Link key={category.id} href={`/categorias/${category.id}`}>
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <Image
              src={category.image || "/placeholder.svg?height=300&width=300"}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
