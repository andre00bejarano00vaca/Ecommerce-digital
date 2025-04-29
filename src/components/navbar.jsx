"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X, Search } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Mi Tienda
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Inicio
            </Link>
            <Link href="/productos" className="hover:text-green-600 transition-colors">
              Productos
            </Link>
            <Link href="/categorias" className="hover:text-green-600 transition-colors">
              Categorías
            </Link>
            <Link href="/contacto" className="hover:text-green-600 transition-colors">
              Contacto
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block">
              <Search size={20} />
            </button>

            <Link href="/carrito" className="relative">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-xl py-2" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
              <Link href="/productos" className="text-xl py-2" onClick={() => setIsMenuOpen(false)}>
                Productos
              </Link>
              <Link href="/categorias" className="text-xl py-2" onClick={() => setIsMenuOpen(false)}>
                Categorías
              </Link>
              <Link href="/contacto" className="text-xl py-2" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
