"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { Input } from "@/shared/ui/input"

type Product = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

type ProductTableProps = {
  products: Product[]
  onUpdateQuantity?: (id: number, quantity: number) => void
  onRemoveItem?: (id: number) => void
}

export function ProductTable({ products, onUpdateQuantity, onRemoveItem }: ProductTableProps) {
  return (
    <div className="border-b pb-4">
      <div className="grid grid-cols-12 gap-4 text-sm font-medium pb-4">
        <div className="col-span-6">Product</div>
        <div className="col-span-2 text-right">Price</div>
        <div className="col-span-2 text-right">Quantity</div>
        <div className="col-span-2 text-right">Subtotal</div>
      </div>

      {products.map((product) => (
        <div key={product.id} className="grid grid-cols-12 gap-4 py-4 items-center border-t">
          <div className="col-span-6 flex items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded bg-muted">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <span className="font-medium">{product.name}</span>
          </div>
          <div className="col-span-2 text-right">${product.price}</div>
          <div className="col-span-2 text-right">
            <div className="inline-flex items-center border rounded-md">
              <Input
                type="number"
                min="1"
                value={product.quantity.toString().padStart(2, "0")}
                className="w-12 h-8 text-center border-0 p-0"
                onChange={(e) => onUpdateQuantity?.(product.id, Number.parseInt(e.target.value))}
              />
              <div className="flex flex-col">
                <button
                  className="h-4 px-1 text-xs border-l"
                  onClick={() => onUpdateQuantity?.(product.id, product.quantity + 1)}
                >
                  ▲
                </button>
                <button
                  className="h-4 px-1 text-xs border-l border-t"
                  onClick={() => onUpdateQuantity?.(product.id, Math.max(1, product.quantity - 1))}
                >
                  ▼
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 text-right font-medium">${product.price * product.quantity}</div>
          <div className="col-span-1 flex justify-end">
            <button className="text-destructive" onClick={() => onRemoveItem?.(product.id)}>
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}