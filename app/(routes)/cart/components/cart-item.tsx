import { useRouter } from "next/navigation"
import { ProductType } from "@/types/product"
import { useCart } from "@/hooks/use-cart"
import { cn, formatPrice } from "@/lib/utils"
import { X } from "lucide-react"
import ProductTags from "@/components/shared/product-tags"

interface CartItemProps {
    item: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { item } = props
    const router = useRouter()
    const { removeItem } = useCart()

    return (
       <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${item.slug}`)} className="cursor-pointer">
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[0].url}`} 
                    alt={item.name}
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" 
                />
            </div>
            <div className="flex justify-between flex-1 px-2">
                <div>
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p>{formatPrice(item.price)}</p>
                    <ProductTags taste={item.taste} origin={item.origin} />
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white text-black border shadow-md p-1 transition hover:scale-110")}>
                        <X size={20} onClick={() => removeItem(item.id)} />
                    </button>
                </div>
            </div>
       </li>
    )

}

export default CartItem