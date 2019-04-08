import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { requestAsyncCoupons } from '../../actions'
import { Coupon, Spinners } from '../index'
import * as Types from '../../types/components/CouponsTypes'

interface ICouponAsyncProps {
    couponsJSON: Types.ICouponsJSON
    onRequestAsyncCoupons(): void
}

class CouponAsync extends React.PureComponent<ICouponAsyncProps> {
    private loading = true

    componentDidMount() {
        const { onRequestAsyncCoupons } = this.props
        onRequestAsyncCoupons()
    }

    public render(): JSX.Element {
        const { couponsJSON } = this.props
        const couponsJSONCallCheck =
            Array.isArray(couponsJSON) && couponsJSON.length

        if (couponsJSONCallCheck) this.loading = false

        return (
            <>
                <Spinners loading={this.loading} />
                {couponsJSONCallCheck && <Coupon couponsJSON={couponsJSON} />}
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
        onRequestAsyncCoupons: bindActionCreators(requestAsyncCoupons, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CouponAsync)
