export interface IProductsJSON {
    productsJSON: {
        availableCoupon?: boolean,
        coverImage: string,
        id: string,
        price: number,
        score: number,
        title: string,
        count?: number,
        isChecked?: boolean,
        isInWishList?: boolean,
    }
}

export interface IUpdateProducts {
    type: string;
    productsJSON: IProductsJSON;
}