import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import  { ProductType } from "@/types/product"
import { get } from "http"

interface UseFavoritesType {
    favorites: ProductType[]
    addToFavorites: (data: ProductType) => void
    removeFromFavorites: (id: number) => void
}

export const useFavorites = create(persist<UseFavoritesType>((set, get) => ({
    favorites: [],

    addToFavorites: (data: ProductType) => {
        const favorites = get().favorites
        const isFavorite = favorites.find((item) => item.id === data.id)

        if (isFavorite) {
            // TODO: implement toast
            alert("Ya tienes este producto en favoritos 🚫")
            return
        }

        set({ favorites: [...favorites, data] })
        // TODO: implement toast
        alert("Producto añadido a tus favoritos ❤️")
    },

    removeFromFavorites: (id: number) => {
        const favorites = get().favorites
        const newFavorites = favorites.filter((item) => item.id !== id)
        set({ favorites: newFavorites })

        // TODO: implement toast
        alert("Producto eliminado de tus favoritos 🧹")
    }
}), {
    name: "favorites-storage",
    storage: createJSONStorage(() => localStorage),
}))