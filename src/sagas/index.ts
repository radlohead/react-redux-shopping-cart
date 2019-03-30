import { fork } from 'redux-saga/effects';
import { fetchCouponList } from './CouponsApi';
import { fetchProductList } from './ProductsApi';

export default function* rootSaga() {
    yield fork(fetchCouponList),
    yield fork(fetchProductList)
}