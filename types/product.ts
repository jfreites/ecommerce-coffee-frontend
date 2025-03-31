export type ProductType = {
    id: number,
    name: string
    slug: string
    description: string
    price: number
    taste: string
    origin: string
    images: {
        id: number
        url: string
        name: string
    }[]
    category: {
        attributes: {
            name: string
            slug: string
        }
    }
    isFeatured: boolean
    active: boolean
}