import produce from 'immer';
import { combineReducers } from 'redux';
import {
    PRODUCTS_REQUEST,
    PRODUCTS_FETCHED,
    PRODUCTS_ERROR,
    PRODUCTS_UPDATE,
    COUPONS_REQUEST,
    COUPONS_FETCHED,
    COUPONS_ERROR
} from '../actions/ActionTypes';
import * as Types from '../types/reducers/ReducerTypes';

type InitialStateProductsType = {
    productsJSON: Types.IFetchProducts | null;
};

const initialStateProducts: InitialStateProductsType = {
    productsJSON: null
};

const products = produce(
    (draft = initialStateProducts, action: Types.IReducer['action']) => {
        switch (action.type) {
            case PRODUCTS_REQUEST:
                return draft;
            case PRODUCTS_FETCHED:
                Object(action.productsJSON).forEach(
                    (item: Types.IFetchProducts) => {
                        (item.count = 1),
                            (item.isChecked = false),
                            (item.isInWishList = false);
                    }
                );
                draft.productsJSON = action.productsJSON;
                return;
            case PRODUCTS_UPDATE:
                draft.productsJSON = [...action.productsJSON];
                return;
            case PRODUCTS_ERROR:
                draft.productsJSON = action.productsJSON;
                return;
            default:
                return draft;
        }
    }
);

type InitialStateCouponsType = {
    couponsJSON: Types.IFetchCoupons | null;
};

const initialStateCoupons: InitialStateCouponsType = {
    couponsJSON: null
};

const coupons = produce(
    (draft = initialStateCoupons, action: Types.IReducer['action']) => {
        switch (action.type) {
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
    }
);

export default combineReducers({
    products,
    coupons
});
