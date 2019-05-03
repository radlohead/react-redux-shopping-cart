export interface IReducer {
    action: {
        [type: string]: string
        productsJSON: any
    }
}

export interface IFetchProducts {
    id: string
    title: string
    coverImage: string
    price: number
    score: number
    count?: number
    isChecked?: boolean
    isInWishList?: boolean
    availableCoupon?: boolean
}

export interface IUpdateProducts {
    productsJSON: IFetchProducts
}

export interface IFetchCoupons {
    title: string
    discountRate?: number
    discountAmount?: number
}

export interface IWishList {
    type: string
    totalPrice: number
    items: IFetchProducts[]
}
