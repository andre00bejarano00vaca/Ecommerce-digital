import Image from "next/image"
import Link from "next/link"
import { getCategories } from "@/lib/products"

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Todas las Categorías</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/categorias/${category.id}`}>
            <div className="relative h-64 rounded-lg overflow-hidden group border">
              <Image
                src={category.image || "/placeholder.svg?height=400&width=400"}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  <p className="text-white mt-2">{category.productCount} productos</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Compra por Colección</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-80 rounded-lg overflow-hidden group border">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Colección de Verano"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
              <h3 className="text-white text-3xl font-bold">Colección de Verano</h3>
              <p className="text-white mt-2 mb-4">Las últimas tendencias para esta temporada</p>
              <Link href="/colecciones/verano">
                <span className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                  Ver Colección
                </span>
              </Link>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden group border">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Ofertas Especiales"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
              <h3 className="text-white text-3xl font-bold">Ofertas Especiales</h3>
              <p className="text-white mt-2 mb-4">Hasta 50% de descuento en productos seleccionados</p>
              <Link href="/ofertas">
                <span className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                  Ver Ofertas
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
