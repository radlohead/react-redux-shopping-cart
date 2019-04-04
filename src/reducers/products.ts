import produce from 'immer';
import {
    PRODUCTS_REQUEST,
    PRODUCTS_FETCHED,
    PRODUCTS_ERROR,
    PRODUCTS_UPDATE
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

export default products;
