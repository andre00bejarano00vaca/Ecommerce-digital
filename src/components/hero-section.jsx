import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Descubre Nuestros Productos Exclusivos</h1>
            <p className="text-lg text-gray-600 mb-8">
              Encuentra todo lo que necesitas en un solo lugar con los mejores precios y la mejor calidad garantizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/productos">
                <Button size="lg">Ver Productos</Button>
              </Link>
              <Link href="/categorias">
                <Button variant="outline" size="lg">
                  Explorar Categorías
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-64 md:h-96">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Productos destacados"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
