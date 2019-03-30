import { call, put, take} from 'redux-saga/effects';
import { requestCoupons, fetchCoupons } from '../actions';
import { COUPONS_REQUEST, COUPONS_ERROR } from '../actions/ActionTypes';

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