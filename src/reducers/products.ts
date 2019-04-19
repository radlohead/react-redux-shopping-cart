import produce from 'immer'
import {
    PRODUCTS_REQUEST,
    PRODUCTS_FETCHED,
    PRODUCTS_ERROR,
    PRODUCTS_UPDATE,
    WISHLIST_ITEM_COUNT
} from '../actions/ActionTypes'
import * as Types from '../types/reducers/ReducerTypes'

type InitialStateProductsType = {
    productsJSON: Types.IFetchProducts | []
}

const initialStateProducts: InitialStateProductsType = {
    productsJSON: []
}

const products = produce(
    (draft = initialStateProducts, action: Types.IReducer['action']) => {
        switch (action.type) {
            case PRODUCTS_REQUEST:
                return draft
            case PRODUCTS_FETCHED:
                if (!draft.productsJSON.length) {
                    Object(action.productsJSON).forEach(
                        (item: Types.IFetchProducts) => {
                            ;(item.count = 1),
                                (item.isChecked = false),
                                (item.isInWishList = false)
                        }
                    )
                    draft.productsJSON = action.productsJSON
                } else {
                    draft.productsJSON.map(
                        (item: Types.IFetchProducts, i: number) => {
                            item.id = action.productsJSON[i].id
                            item.title = action.productsJSON[i].title
                            item.coverImage = action.productsJSON[i].coverImage
                            item.price = action.productsJSON[i].price
                            item.score = action.productsJSON[i].score
                            item.availableCoupon =
                                action.productsJSON[i].availableCoupon
                        }
                    )
                }
                return
            case PRODUCTS_UPDATE:
                draft.productsJSON = [...action.productsJSON]
                return
            case PRODUCTS_ERROR:
                draft.productsJSON = action.productsJSON
                return
            default:
                return draft
        }
    }
)

export default products
