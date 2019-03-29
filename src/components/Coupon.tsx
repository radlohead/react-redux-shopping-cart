import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchCoupons } from '../actions';
import * as Types from '../types/ICouponsTypes';

interface ICouponProps {
    couponsJSON: Types.ICouponsJSON,
    onFetchCoupons(): void;
}

class Coupon extends React.PureComponent<ICouponProps> {
    constructor(props: ICouponProps) {
        super(props);
        const { couponsJSON, onFetchCoupons } = props;
        if(!couponsJSON) onFetchCoupons();
    }
    public render(): JSX.Element {
        return (
            <>
                Coupon
            </>
        )
    }
}

interface IMapStateToProps {
    coupons: ICouponProps
}

const mapStateToProps = (state: IMapStateToProps) => {
    return {
        couponsJSON: state.coupons.couponsJSON
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onFetchCoupons: bindActionCreators(fetchCoupons, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);