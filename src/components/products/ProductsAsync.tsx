import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { requestAsyncProducts } from '../../actions'
import { Products, Spinners } from '../index'
import * as Types from '../../types/components/ProductsTypes'

interface IProductsAsyncProps {
    productsJSON: Types.IProductsJSON
    onRequestAsyncProducts(): void
}

class ProductsAsync extends React.PureComponent<IProductsAsyncProps> {
    private loading = true

    componentDidMount() {
        const { onRequestAsyncProducts } = this.props
        onRequestAsyncProducts()
    }

    public render(): JSX.Element {
        const { productsJSON } = this.props
        const productsJSONCallCheck =
            Array.isArray(productsJSON) && productsJSON.length

        if (productsJSONCallCheck) this.loading = false

        return (
            <>
                <Spinners loading={this.loading} />
                {productsJSONCallCheck && (
                    <Products productsJSON={productsJSON} />
                )}
            </>
        )
    }
}

interface IMapStateToProps {
    products: IProductsAsyncProps
}

const mapStateToProps = (state: IMapStateToProps) => {
    return {
        productsJSON: state.products.productsJSON
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onRequestAsyncProducts: bindActionCreators(
            requestAsyncProducts,
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsAsync)
