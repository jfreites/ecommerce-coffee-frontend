'use client'

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation"
import SkeletonProduct from "../components/skeleton-product";
import CarouselProduct from "../components/carousel-product";
import InfoProduct from "../components/info-product";

export default function Page() {
    const params = useParams()
    const { slug } = params

    const { result, loading }: ResponseType = useGetProductBySlug(slug);

    if (result === null && loading) {
        return <SkeletonProduct />
    }

    return (
        <div className="max-w-6xl mx-auto py-4 sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct images={result.data[0].images} />
                </div>

                <div className="sm:px-12">
                    <InfoProduct product={result.data[0]} />
                </div>
            </div>
        </div>
    )
}