"use client"

import { ShoppingCart, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export default function AddToCartButton({ product, compact = false }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 2000)
  }

  if (compact) {
    return (
      <Button size="sm" variant={added ? "outline" : "default"} onClick={handleAddToCart} className="h-8 w-8 hover:cursor-pointer p-0">
        {added ? <Check size={16} /> : <ShoppingCart size={16} />}
      </Button>
    )
  }

  return (
    <Button onClick={handleAddToCart} className="w-full" variant={added ? "outline" : "default"}>
      {added ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Añadido
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" /> Añadir al Carrito
        </>
      )}
    </Button>
  )
}
