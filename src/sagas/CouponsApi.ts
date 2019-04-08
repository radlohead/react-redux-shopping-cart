import { requestCoupons, fetchCoupons } from '../actions'
import { COUPONS_REQUEST, COUPONS_ERROR } from '../actions/ActionTypes'
import { fetchItemList } from './withGetApi'

export const couponListData = {
    url: 'http://localhost:4000/coupons',
    requestItems: requestCoupons,
    fetchItems: fetchCoupons,
    REQUEST_ITEM: COUPONS_REQUEST,
    ERROR_ITEM: COUPONS_ERROR
}

export default fetchItemList(couponListData)
