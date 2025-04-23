/* eslint-disable @next/next/no-img-element */
"use client"

import { X } from "lucide-react"
import { Input } from "@/shared/ui/input"

export function ProductTable({products}) {
  return (
    <div className="border-b pb-4">
      <div className="grid grid-cols-12 gap-4 text-sm font-medium pb-4">
        <div className="col-span-6">Product</div>
        <div className="col-span-2 text-right">Price</div>
        <div className="col-span-2 text-right">Quantity</div>
        <div className="col-span-2 text-right">Subtotal</div>
      </div>

      {products.map((product) => (
        <div key={product?.product.id} className="grid grid-cols-12 gap-4 py-4 items-center border-t">
          <div className="col-span-6 flex items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded bg-muted">
              <img
                src={`https://store-api.softclub.tj/images/${product?.product.image}`}
                alt={product?.product.productName}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <span className="font-medium">{product?.product.productName}</span>
          </div>
          <div className="col-span-2 text-right">${product?.product.price}</div>
          <div className="col-span-2 text-right">
            <div className="inline-flex items-center border rounded-md">
              <Input
                type="number"
                min="1"
                value={product.product.quantity.toString().padStart(2, "0")}
                className="w-12 h-8 text-center border-0 p-0"
              />
              <div className="flex flex-col">
                <button
                  className="h-4 px-1 text-xs border-l"
                >
                  ▲
                </button>
                <button
                  className="h-4 px-1 text-xs border-l border-t"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 text-right font-medium">${product.product.price * product.product.quantity}</div>
          <div className="col-span-1 flex justify-end">
            <button className="text-destructive" >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}