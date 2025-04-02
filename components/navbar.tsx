'use client';

import { BaggageClaim, Divide, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useFavorites } from "@/hooks/use-favorites";

const Navbar = () => { 
    const router = useRouter()
    const { items } = useCart()
    const { favorites } = useFavorites()

    return (
        <div className="flex items-center justify-between mx-auto p-4 cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push('/')}>Cofi
                <span className="font-bold">Shop</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                {items.length === 0 ? 
                <ShoppingCart 
                    strokeWidth="1"
                    className="cursor-pointer" 
                    onClick={() => router.push('/cart')} 
                />
                : (
                    <div className="flex gap-1" onClick={() => router.push('/cart')}>
                        <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                        <span>{items.length}</span>
                    </div>
                )}

                <Heart 
                    strokeWidth="1"
                    className={`cursor-pointer ${favorites.length > 0 && 'fill-black dark:fill-white'}`}
                    onClick={() => router.push('/favorites')} 
                />

                <User 
                    strokeWidth="1"
                    className="cursor-pointer" 
                />

                <ToggleTheme />
            </div>
        </div>
    )
}

export default Navbar;