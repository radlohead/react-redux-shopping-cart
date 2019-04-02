import { requestProducts, fetchProducts } from '../actions';
import { PRODUCTS_REQUEST, PRODUCTS_ERROR } from '../actions/ActionTypes';
import { fetchItemList } from './withGetApi';
import * as Types from '../types/sagas/SagasTypes';

export const productListData: Types.IFetchItemList = {
    url: 'http://localhost:4000/products',
    requestItems: requestProducts,
    fetchItems: fetchProducts,
    REQUEST_ITEM: PRODUCTS_REQUEST,
    ERROR_ITEM: PRODUCTS_ERROR
}

export default fetchItemList(productListData);