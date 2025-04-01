import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
// import { useToast } from "@/hooks/use-toast"
import { ProductType } from "@/types/product"

interface CartStore {
    items: ProductType[]
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],

    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find(item => item.id === data.id)

        if (existingItem) {
            alert("Product already in cart 🚫")
            // toast({
            //     title: "Product already in cart 🚫",
            //     //description: "This product is already in your cart.",
            //     variant: "destructive",
            // })
            return
        }
        set({ items: [...currentItems, data] })

        // toast({
        //     title: "Product added to cart 🛍️"
        // })
        alert("Product added to cart 🛍️")
    },

    removeItem: (id: number) => {
        const currentItems = get().items
        const updatedItems = currentItems.filter(item => item.id !== id)

        set({ items: updatedItems })

        // toast({
        //     title: "Product removed from cart 🗑️"
        // })
    },

    removeAll: () => {
        set({ items: [] })

        // toast({
        //     title: "All products removed from cart 🗑️"
        // })
    }
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))