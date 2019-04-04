import produce from 'immer';
import {
    COUPONS_REQUEST,
    COUPONS_FETCHED,
    COUPONS_ERROR
} from '../actions/ActionTypes';
import * as Types from '../types/reducers/ReducerTypes';

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

export default coupons;
