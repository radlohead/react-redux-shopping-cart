export interface IReducer {
    action: { [type: string]: string }
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
    type: string
    title: string
    discountRate?: number
    discountAmount?: number
}
