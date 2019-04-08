import { put } from 'redux-saga/effects'
import { requestProducts, fetchProducts } from '../actions'
import { PRODUCTS_ERROR } from '../actions/ActionTypes'

const fetchProductsItemApi = async () => {
    const response = await fetch('http://localhost:4000/products')
    return await response.json()
}

function* fetchProductsItem() {
    const itemJSON = yield fetchProductsItemApi()
    try {
        yield put(requestProducts())
        yield put(fetchProducts(itemJSON))
    } catch (e) {
        yield put({ type: PRODUCTS_ERROR, message: e.message })
    }
}

export default fetchProductsItem
