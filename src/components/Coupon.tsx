import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { requestCoupons } from '../actions';
import * as Types from '../types/ICouponsTypes';

interface ICouponProps {
    couponsJSON: Types.ICouponsJSON,
    onRequestCoupons(): void;
}

class Coupon extends React.PureComponent<ICouponProps> {
    constructor(props: ICouponProps) {
        super(props);
        const { onRequestCoupons } = props;
        onRequestCoupons();
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
        onRequestCoupons: bindActionCreators(requestCoupons, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);