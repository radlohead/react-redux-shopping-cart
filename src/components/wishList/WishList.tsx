import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { CouponAsync } from '../index'
import * as Types from '../../types/components/ProductsTypes'
import { updateProducts } from '@src/actions'
import '@src/css/components/WishList.scss'

interface IWishListProps {
    productsJSON: Types.IProductsCountJSON
    onUpdateProducts(productsJSON: Types.IProductsJSON): void
}

class WishList extends React.PureComponent<IWishListProps> {
    private handleChangeNumber(i: number, e: ChangeEvent<HTMLInputElement>) {
        const { productsJSON, onUpdateProducts } = this.props
        productsJSON[i].count = e.target.value
        onUpdateProducts(productsJSON)
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
                                    {item.price}
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

    private totalPrice(): number {
        const { productsJSON } = this.props
        const totalPrice = productsJSON
            .map((v: Types.IProductsCountJSON['productsJSON']) => {
                if (v.isInWishList) return v
            })
            .filter((v: Types.IProductsCountJSON['productsJSON']) => {
                if (v) return v
            })
            .reduce(
                (p: [], c: Types.IProductsCountJSON['productsJSON']) => {
                    return [...p, c.price]
                },
                [0]
            )
            .reduce((p: number, c: number) => p + c)
        return totalPrice
    }

    public render(): JSX.Element {
        return (
            <>
                {this.renderWishList()}
                <strong className="total-price">{this.totalPrice()}</strong>
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onUpdateProducts: bindActionCreators(updateProducts, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WishList)
