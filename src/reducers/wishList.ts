import produce from 'immer'
import { TOTAL_PRICE } from '../actions/ActionTypes'

const wishList = produce((draft = {}, action: any) => {
    switch (action.type) {
        case TOTAL_PRICE:
            draft.totalPrice = action.totalPrice
            return
        default:
            return draft
    }
})

export default wishList
