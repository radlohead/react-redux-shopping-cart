import produce from 'immer'
import { TOTAL_PRICE } from '../actions/ActionTypes'
import * as Types from '../types/reducers/ReducerTypes'

const wishList = produce((draft = {}, action: Types.IWishList) => {
    switch (action.type) {
        case TOTAL_PRICE:
            draft.totalPrice = action.totalPrice
            return
        default:
            return draft
    }
})

export default wishList
