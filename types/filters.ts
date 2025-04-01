export type FilterType = {
    result: ResultFilterType | null
    loading: boolean
    error: string
}

export type ResultFilterType = {
    data: {
        schema: {
            attributes: {
                origin: {
                    enum: string[]
                }
            } 
        }
    }
}