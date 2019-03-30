import { call, put, take } from 'redux-saga/effects';
import { requestProducts, fetchProducts } from '../actions';
import { PRODUCTS_REQUEST, PRODUCTS_ERROR } from '../actions/ActionTypes';

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