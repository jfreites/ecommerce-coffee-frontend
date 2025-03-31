"use client"
import { useRouter } from "next/navigation"
import { Carousel, CarouselItem, CarouselContent } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio en 24/48 h.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        linkUrl: "#!",
    },
    {
        id: 2,
        title: "Consigue un 25% de descuento en tu primer compra.",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        linkUrl: "#!",
    },
    {
        id: 3,
        title: "Promociones especiales en compras mayores a $ 500.",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        linkUrl: "#!",
    },
]

const CarouselTextBanner = () => {
    const router = useRouter()
    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto" 
                plugins={[
                    Autoplay({
                        delay: 2500
                    })
                ]}
            >
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, description, linkUrl }) => (
                        <CarouselItem key={id} className="cursor-pointer py-4" onClick={() => router.push(linkUrl)}>
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col items-center justify-center text-center">
                                        <h2 className="sm:text-lg text-wrap dark:text-secondary">{title}</h2>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarouselTextBanner;