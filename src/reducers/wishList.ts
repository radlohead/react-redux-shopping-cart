import produce from 'immer'
import { TOTAL_PRICE, GET_WISHLIST_ITEMS } from '../actions/ActionTypes'
import * as Types from '../types/reducers/ReducerTypes'

const wishList = produce((draft = {}, action: Types.IWishList | any) => {
    switch (action.type) {
        case GET_WISHLIST_ITEMS:
            const wishListItems = action.items.filter(
                (v: Types.IFetchProducts) => v.isInWishList
            )
            draft.items = wishListItems
            return
        case TOTAL_PRICE:
            draft.totalPrice = action.totalPrice
            return
        default:
            return draft
    }
})

export default wishList
