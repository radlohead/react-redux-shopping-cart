export interface IProductsJSON {
    length?: number
    map?: any
    productsJSON: {
        availableCoupon?: boolean
        coverImage: string
        id: string
        price: number
        score: number
        title: string
        count?: number
        isChecked?: boolean
        isInWishList?: boolean
    }
}

export interface IProductsCountJSON {
    [key: number]: {
        count: string
    }
    length?: number
    map?: any
    productsJSON: {
        availableCoupon?: boolean
        coverImage: string
        id: string
        price: number
        score: number
        title: string
        count?: number
        isChecked?: boolean
        isInWishList?: boolean
    }
}

export interface IUpdateProducts {
    type: string
    productsJSON: IProductsJSON
}
