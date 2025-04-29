import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Productos Destacados</h2>
        <FeaturedProducts />

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Categorías</h2>
          <CategorySection />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Envío Rápido</h3>
              <p className="text-gray-600">Entrega en 24-48 horas a todo el país</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">Todos nuestros productos tienen garantía de 1 año</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Atención al Cliente</h3>
              <p className="text-gray-600">Soporte 24/7 para resolver todas tus dudas</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
