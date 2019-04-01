import fetchCouponList from './CouponsApi';
import fetchProductList from './ProductsApi';

export default function* rootSaga() {
    yield fetchProductList,
    yield fetchCouponList
}