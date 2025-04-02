/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { useFavorites } from "@/hooks/use-favorites";
import { ProductType } from "@/types/product";
import { cn, formatPrice } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

interface FavoriteItemProductProps {
    product: ProductType
}

const FavoriteItemProduct = (props: FavoriteItemProductProps) => {
    const { product } = props
    const router = useRouter()
    const { removeFromFavorites } = useFavorites()
    const { addItem } = useCart()

    const addToCheckout = () => {
        addItem(product)
        removeFromFavorites(product.id)
    }

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/products/${product.slug}`)}>
                <img 
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} 
                    alt={product.name}
                    className="w-24 h-24 overflow-hidden rounded-md shadow-md sm:w-auto sm:h-32" 
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                            {product.taste}
                        </p>
                        <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
                            {product.origin}
                        </p>
                    </div>
                    <Button className="mt-5 rounded-full" onClick={addToCheckout}>Añadir al carrito</Button>
                </div>
                <div>
                    <button
                        className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transtition")}
                    >
                        <X size={20} onClick={() => removeFromFavorites(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    )

}
export default FavoriteItemProduct;