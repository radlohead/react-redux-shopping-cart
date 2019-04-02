import produce from 'immer';
import { combineReducers } from 'redux';
import {
    PRODUCTS_REQUEST,
    PRODUCTS_FETCHED,
    PRODUCTS_ERROR,
    COUPONS_REQUEST,
    COUPONS_FETCHED,
    COUPONS_ERROR
} from '../actions/ActionTypes';
import * as Types from '../types/reducers/ReducerTypes';

const products = produce((draft = {}, action: Types.IReducer['action']) => {
    switch(action.type) {
        case PRODUCTS_REQUEST:
            return draft;
        case PRODUCTS_FETCHED:
            (action.productsJSON as any).forEach((item: Types.IFetchProducts) => {
                item.count = 1,
                item.isChecked = false,
                item.isInWishList = false
            });
            draft.productsJSON = action.productsJSON;
            return;
        case PRODUCTS_ERROR:
            draft.productsJSON = action.productsJSON;
            return;
        default:
            return draft;
    }
});

const coupons = produce((draft = {}, action: Types.IReducer['action']) => {
    switch(action.type) {
        case COUPONS_REQUEST:
            return draft;
        case COUPONS_FETCHED:
            draft.couponsJSON = action.couponsJSON;
            return;
        case COUPONS_ERROR:
            draft.couponsJSON = action.couponsJSON;
            return;
        default:
            return draft;
    }
});

export default combineReducers({
    products,
    coupons
});