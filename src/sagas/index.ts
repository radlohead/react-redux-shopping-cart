import { call, put, take, fork } from 'redux-saga/effects';
import { requestCoupons, fetchCoupons } from '../actions';
import { COUPONS_REQUEST } from '../actions/ActionTypes';

export const fetchCouponApi = async () => {
    const response = await fetch('http://localhost:4000/coupons');
    return await response.json();
}

export function* fetchCoupon() {
    yield put(requestCoupons());
    const couponsJSON = yield call(fetchCouponApi);
    yield put(fetchCoupons(couponsJSON));
}

export function* fetchCouponList() {
    yield take(COUPONS_REQUEST);
    yield call(fetchCoupon);
}

export default function* rootSaga() {
    yield fork(fetchCouponList)
}