'use client'

import { useFavorites } from "@/hooks/use-favorites";
import FavoriteItemProduct from "./components/favorite-item-product";

export default function Page() {
    const { favorites } = useFavorites();

    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">Productos favoritos</h1>
            
            <div>
                <div>
                    {favorites.length === 0 && (
                        <p>No hay productos guardados en favoritos</p>
                    )}

                    <ul>
                        {favorites.map((item) => (
                            <FavoriteItemProduct
                                key={item.id}
                                product={item}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}