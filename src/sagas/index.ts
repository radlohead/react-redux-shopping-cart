import { call, put, take, fork } from 'redux-saga/effects';
import { requestProducts, fetchProducts, requestCoupons, fetchCoupons } from '../actions';
import { PRODUCTS_REQUEST, PRODUCTS_ERROR, COUPONS_REQUEST, COUPONS_ERROR } from '../actions/ActionTypes';

export const fetchCouponApi = async () => {
    const response = await fetch('http://localhost:4000/coupons');
    return await response.json();
}

export function* fetchCoupon() {
    const couponsJSON = yield call(fetchCouponApi);
    try {
        yield put(requestCoupons());
        yield put(fetchCoupons(couponsJSON));
    } catch(e) {
        yield put({ type: COUPONS_ERROR, message: e.message });
    }
}

export function* fetchCouponList() {
    yield take(COUPONS_REQUEST);
    yield call(fetchCoupon);
}

export const fetchProductApi = async () => {
    const response = await fetch('http://localhost:4000/products');
    return await response.json();
}

export function* fetchProduct() {
    const productsJSON = yield call(fetchProductApi);
    try {
        yield put(requestProducts());
        yield put(fetchProducts(productsJSON));
    } catch(e) {
        yield put({ type: PRODUCTS_ERROR, message: e.message });
    }
}

export function* fetchProductList() {
    yield take(PRODUCTS_REQUEST);
    yield call(fetchProduct);
}

export default function* rootSaga() {
    yield fork(fetchCouponList),
    yield fork(fetchProductList)
}