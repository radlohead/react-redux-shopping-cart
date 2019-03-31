import React from 'react';
import * as Types from '../types/ICouponsTypes';

interface ICouponProps {
    couponsJSON: Types.ICouponsJSON
}

class Coupon extends React.Component<ICouponProps> {
    constructor(props: ICouponProps) {
        super(props);
    }

    public render(): JSX.Element {
        const { couponsJSON } = this.props;

        return (
            <>
                coupons
            </>
        )
    }
}

export default Coupon;