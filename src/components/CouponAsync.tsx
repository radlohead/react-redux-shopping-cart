import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { requestCoupons } from '../actions'
import Coupon from './Coupon'
import * as Types from '../types/components/CouponsTypes'

interface ICouponAsyncProps {
    couponsJSON: Types.ICouponsJSON
    onRequestCoupons(): void
}

class CouponAsync extends React.PureComponent<ICouponAsyncProps> {
    constructor(props: ICouponAsyncProps) {
        super(props)
        const { couponsJSON, onRequestCoupons } = props
        if (!couponsJSON) onRequestCoupons()
    }

    public render(): JSX.Element | null {
        const { couponsJSON } = this.props
        if (!couponsJSON) return null

        return (
            <>
                <Coupon couponsJSON={couponsJSON} />
            </>
        )
    }
}

interface IMapStateToProps {
    coupons: ICouponAsyncProps
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CouponAsync)
