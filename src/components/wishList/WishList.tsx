import React from 'react'
import { connect } from 'react-redux'
import { CouponAsync } from '../index'
import * as Types from '../../types/components/ProductsTypes'

interface IWishListProps {
    productsJSON: Types.IProductsJSON
}

class WishList extends React.PureComponent<IWishListProps> {
    private renderWishList(): JSX.Element | null {
        const { productsJSON } = this.props
        if (!productsJSON) return null

        return (
            <ul>
                {productsJSON.map(
                    (item: Types.IProductsJSON['productsJSON']) => {
                        if (!item.isInWishList) return

                        return (
                            <li key={`${item.id}_${item.score}`}>
                                {item.title}
                            </li>
                        )
                    }
                )}
            </ul>
        )
    }

    public render(): JSX.Element {
        return (
            <>
                {this.renderWishList()}
                <CouponAsync />
            </>
        )
    }
}

interface IMapStateToProps {
    products: IWishListProps
}

const mapStateToProps = (state: IMapStateToProps) => {
    return {
        productsJSON: state.products.productsJSON
    }
}

export default connect(mapStateToProps)(WishList)
