import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { CouponAsync } from '../index'
import * as Types from '../../types/components/ProductsTypes'
import { updateItemCount } from '@src/actions'
import '@src/css/components/WishList.scss'

interface IWishListProps {
    productsJSON: Types.IProductsCountJSON
    onUpdateItemCount(e: any): void
}

class WishList extends React.PureComponent<IWishListProps> {
    private handleChangeNumber(i: number, e: ChangeEvent<HTMLInputElement>) {
        const { productsJSON, onUpdateItemCount } = this.props
        productsJSON[i].count = e.target.value
        onUpdateItemCount(productsJSON)
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
                                <input
                                    type="number"
                                    value={item.count}
                                    onChange={this.handleChangeNumber.bind(
                                        this,
                                        i
                                    )}
                                />
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onUpdateItemCount: bindActionCreators(updateItemCount, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WishList)
