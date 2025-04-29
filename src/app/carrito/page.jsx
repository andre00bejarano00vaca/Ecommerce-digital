"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setSubtotal(total)
  }, [cart])

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
        <p className="text-xl mb-8">Tu carrito está vacío</p>
        <Link href="/productos">
          <Button>Ver Productos</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center border-b py-4">
              <div className="relative w-24 h-24 rounded overflow-hidden flex-shrink-0 mb-4 md:mb-0">
                <Image
                  src={item.image || "/placeholder.svg?height=96&width=96"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:ml-6 flex-grow">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center mt-4 md:mt-0">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                  className="border rounded p-1 mr-4"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>

                <Button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  <Trash2 size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Resumen del Pedido</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Envío</span>
              <span>Gratis</span>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <Button className="w-full mb-2" onClick={()=>{alert("hola mundo")}}>Proceder al Pago</Button>
            <Button variant="outline" className="w-full" onClick={clearCart}>
              Vaciar Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
