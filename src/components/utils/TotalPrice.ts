import * as Types from '../../types/components/ProductsTypes'

export const TotalPrice = (
    productsJSON: Types.IProductsJSON,
    onUpdateTotalPrice: (totalPrice: number) => void
) => {
    onUpdateTotalPrice(
        productsJSON
            .map((v: Types.IProductsCountJSON['productsJSON']) => {
                if (v.isInWishList) return v
            })
            .filter((v: Types.IProductsCountJSON['productsJSON']) => {
                if (v) return v
            })
            .reduce(
                (p: [], c: Types.IProductsCountJSON['productsJSON']) => {
                    return [...p, c.price * Number(c.count)]
                },
                [0]
            )
            .reduce((p: number, c: number) => p + c)
    )
}
