import { put } from 'redux-saga/effects'
import { requestCoupons, fetchCoupons } from '../actions'
import { COUPONS_ERROR } from '../actions/ActionTypes'

const fetchCouponsItemApi = async () => {
    const response = await fetch('http://localhost:4000/coupons')
    return await response.json()
}

function* fetchCouponsItem(param: any) {
    const itemJSON = yield fetchCouponsItemApi()
    try {
        yield put(requestCoupons())
        yield put(fetchCoupons(itemJSON))
    } catch (e) {
        yield put({ type: COUPONS_ERROR, message: e.message })
    }
}

export default fetchCouponsItem
