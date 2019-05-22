import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { CouponAsync } from '../index'
import * as Types from '../../types/components/ProductsTypes'
import { updateProducts, updateTotalPrice, getWishListItem } from '@src/actions'
import '@src/css/components/WishList.scss'
import { TotalPrice } from '../utils/TotalPrice'

interface IWishListProps {
    productsJSON: Types.IProductsCountJSON
    totalPrice: number
    items: []
    onUpdateProducts(productsJSON: Types.IProductsJSON): void
    onUpdateTotalPrice(totalPrice: number): void
    onGetWishListItem(items: any): void
}

class WishList extends React.PureComponent<IWishListProps> {
    private handleChangeNumber(i: number, e: ChangeEvent<HTMLInputElement>) {
        const {
            productsJSON,
            onUpdateProducts,
            onUpdateTotalPrice
        } = this.props
        productsJSON[i].count =
            Number(e.target.value) <= 0 ? '1' : e.target.value
        onUpdateProducts(productsJSON)
        TotalPrice(productsJSON, onUpdateTotalPrice)
    }
    private renderWishList(): JSX.Element | null {
        const { productsJSON } = this.props
        if (!productsJSON) return null

        return (
            <ul>
                {productsJSON.map(
                    (item: Types.IProductsJSON['productsJSON'], i: number) => {
                        if (!item.isInWishList) return

                        return (
                            <li
                                key={`${item.id}_${item.score}`}
                                className="wishList__item"
                            >
                                <input type="checkbox" />
                                <img src={item.coverImage} alt={item.title} />
                                <h2>{item.title}</h2>
                                <span className="wishList__item-price">
                                    {Number(item.price) * Number(item.count)}
                                </span>
                                <input
                                    type="number"
                                    value={item.count}
                                    onChange={e =>
                                        this.handleChangeNumber(i, e)
                                    }
                                />
                            </li>
                        )
                    }
                )}
            </ul>
        )
    }

    componentDidMount() {
        const {
            productsJSON,
            onUpdateTotalPrice,
            onGetWishListItem
        } = this.props
        TotalPrice(productsJSON, onUpdateTotalPrice)
        onGetWishListItem(productsJSON)
    }

    public render(): JSX.Element {
        const { totalPrice } = this.props

        return (
            <>
                {this.renderWishList()}
                <strong className="total-price">{totalPrice}</strong>
                <CouponAsync />
            </>
        )
    }
}

interface IMapStateToProps {
    products: IWishListProps
    wishList: IWishListProps
    items: IWishListProps
}

const mapStateToProps = (state: IMapStateToProps) => {
    return {
        productsJSON: state.products.productsJSON,
        totalPrice: state.wishList.totalPrice,
        items: state.wishList.items
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onUpdateProducts: bindActionCreators(updateProducts, dispatch),
        onUpdateTotalPrice: bindActionCreators(updateTotalPrice, dispatch),
        onGetWishListItem: bindActionCreators(getWishListItem, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WishList)
