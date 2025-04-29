import { getProductsByCategory, getCategoryById } from "@/lib/products"
import ProductGrid from "@/components/product-grid"
import { notFound } from "next/navigation"

export default async function CategoryPage({ params }) {
  const category = await getCategoryById(params.id)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(params.id)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        <p className="text-gray-600 mt-2">{category.description}</p>
      </div>

      {products.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{products.length} productos encontrados</p>
            <div className="flex items-center">
              <span className="mr-2">Ordenar por:</span>
              <select className="border rounded p-1">
                <option>Destacados</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
                <option>Más Recientes</option>
              </select>
            </div>
          </div>
          <ProductGrid products={products} />
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">No hay productos en esta categoría</h2>
          <p className="text-gray-600">Intenta con otra categoría o vuelve más tarde.</p>
        </div>
      )}
    </div>
  )
}
