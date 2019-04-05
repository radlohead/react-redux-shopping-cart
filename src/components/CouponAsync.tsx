import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { requestCoupons } from '../actions';
import { Coupon, Spinners } from './index';
import * as Types from '../types/components/CouponsTypes';

interface ICouponAsyncProps {
    couponsJSON: Types.ICouponsJSON;
    onRequestCoupons(): void;
}

class CouponAsync extends React.PureComponent<ICouponAsyncProps> {
    private loading = true;

    componentDidMount() {
        const { couponsJSON, onRequestCoupons } = this.props;
        if (Array.isArray(couponsJSON) && !couponsJSON.length) {
            onRequestCoupons();
        }
    }

    public render(): JSX.Element {
        const { couponsJSON } = this.props;
        const couponsJSONCallCheck =
            Array.isArray(couponsJSON) && couponsJSON.length;

        if (couponsJSONCallCheck) this.loading = false;

        return (
            <>
                <Spinners loading={this.loading} />
                {couponsJSONCallCheck && <Coupon couponsJSON={couponsJSON} />}
            </>
        );
    }
}

interface IMapStateToProps {
    coupons: ICouponAsyncProps;
}

const mapStateToProps = (state: IMapStateToProps) => {
    return {
        couponsJSON: state.coupons.couponsJSON
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onRequestCoupons: bindActionCreators(requestCoupons, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CouponAsync);
