import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Mi Tienda</h3>
            <p className="text-gray-600 mb-4">
              Ofrecemos los mejores productos con la mejor calidad y al mejor precio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-600 hover:text-green-600">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="text-gray-600 hover:text-green-600">
                  Categorías
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-600 hover:text-green-600">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categorias/electronica" className="text-gray-600 hover:text-green-600">
                  Electrónica
                </Link>
              </li>
              <li>
                <Link href="/categorias/ropa" className="text-gray-600 hover:text-green-600">
                  Ropa
                </Link>
              </li>
              <li>
                <Link href="/categorias/hogar" className="text-gray-600 hover:text-green-600">
                  Hogar
                </Link>
              </li>
              <li>
                <Link href="/categorias/deportes" className="text-gray-600 hover:text-green-600">
                  Deportes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-gray-600">
              <p>Calle Principal 123</p>
              <p>Ciudad, País</p>
              <p className="mt-2">Email: info@mitienda.com</p>
              <p>Teléfono: +1 234 567 890</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
