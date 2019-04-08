import { takeEvery } from 'redux-saga/effects'
import fetchCouponsItem from './CouponsApi'
import fetchProductsItem from './ProductsApi'
import {
    PRODUCTS_ASYNC_REQUEST,
    COUPONS_ASYNC_REQUEST
} from '@src/actions/ActionTypes'

export default function* rootSaga() {
    yield takeEvery(PRODUCTS_ASYNC_REQUEST, fetchProductsItem)
    yield takeEvery(COUPONS_ASYNC_REQUEST, fetchCouponsItem)
}
