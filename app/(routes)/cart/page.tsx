'use client'

import { loadStripe } from '@stripe/stripe-js';
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/utils"
import CartItem from "./components/cart-item"

export default function Page() {
    const { items, removeAll } = useCart()

    const prices = items.map((item) => item.price)
    const total = prices.reduce((acc, price) => acc + price, 0)
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

    const processWithStripe = async () => {
        try {
            const stripe = await stripePromise
            // create order in the backend and get the stripe session
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`, {
                method: 'POST', 
                body: JSON.stringify({ products: items })
            });

            const data = await res.json();
            
            await stripe?.redirectToCheckout({
                sessionId: data.stripeSession.id
            })

            removeAll()
        } catch (error) {
            console.error('Error processing payment with Stripe:', error)
            // TODO: add toast
            alert('error processing payment with Stripe')
        }
    }

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-0">
            <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 && (
                        <p>No hay productos en el carrito</p>
                    )}
                    <ul>
                        {items.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </ul>
                </div>
                <div className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100">
                        <p className="mb-3 text-lg font-semibold">Order Summary</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p>Order total</p>
                            <p>{formatPrice(total)}</p>
                        </div>
                        <div className="flex items-center jusstify-center w-full mt-3">
                            <Button className="w-full" onClick={processWithStripe}>Comprar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
