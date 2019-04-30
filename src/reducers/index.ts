import { combineReducers } from 'redux'
import products from './products'
import coupons from './coupons'
import wishList from './wishList'

export default combineReducers({
    products,
    coupons,
    wishList
})
