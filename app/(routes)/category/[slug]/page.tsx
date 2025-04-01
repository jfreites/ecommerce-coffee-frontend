'use client'

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGetProductsByCategory } from "@/api/getProductsByCategory";
import FiltersControlsCategory from "../components/filters-controls-category";
import SkeletonSchema from "@/components/skeleton-schema";
import ProductCard from "../components/product-card";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";

export default function Page() {
    const params = useParams()
    const { slug } = params
    const { result, loading }: ResponseType = useGetProductsByCategory(slug);
    const router  = useRouter()

    const [filterOrigin, setFilterOrigin] = useState('');

    const filteredProducts = result !== null && !loading && (
        filterOrigin === '' 
            ? result.data 
            : result.data.filter((product: ProductType) => product.origin === filterOrigin)
    )

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {loading && (
                <div>
                    loading...
                </div>
            )}
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium">Café {result.data[0].category.name}</h1>
            )}
            <Separator />

            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

                <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                    {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                        <p>No hay productos con este filtro</p>
                    )}
                </div>
            </div>
            
        </div>
    )
}