import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  const priceFormatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
  })

  const finalPrice = priceFormatter.format(price)
  return finalPrice
}
