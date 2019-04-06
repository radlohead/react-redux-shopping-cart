import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { updateProducts } from '@src/actions'
import * as Types from '../../types/components/ProductsTypes'
import ProductsImages from './ProductsImages'
import '@src/css/components/Products.scss'

interface IProductsProps {
    productsJSON: Types.IProductsJSON
    onUpdateProducts(productsJSON: Types.IProductsJSON): Types.IUpdateProducts
}

interface IProductsState {
    complete: boolean
}

class Products extends React.PureComponent<IProductsProps, IProductsState> {
    constructor(props: IProductsProps) {
        super(props)
        this.state = {
            complete: false
        }

        if (document.readyState === 'interactive') this.isInitialRender = false
    }

    private isInitialRender: boolean = true

    componentDidMount() {
        document.addEventListener('readystatechange', e => {
            if ((e.target as Document).readyState === 'complete') {
                this.setState({
                    complete: true
                })
            }
        })
    }

    private handleClickWishListAdd(item: Types.IProductsJSON['productsJSON']) {
        const { productsJSON, onUpdateProducts } = this.props
        item.isInWishList = !item.isInWishList
        onUpdateProducts(productsJSON)
    }

    private handleClickWishListRemove(
        item: Types.IProductsJSON['productsJSON']
    ) {
        const { productsJSON, onUpdateProducts } = this.props
        item.isInWishList = !item.isInWishList
        onUpdateProducts(productsJSON)
    }

    public renderProductItems(): JSX.Element {
        const { productsJSON } = this.props

        return (
            <ul className="product">
                {productsJSON.map(
                    (item: Types.IProductsJSON['productsJSON'], i: number) => {
                        return (
                            <li
                                key={`${item.id}_${item.score}`}
                                className="product__item"
                            >
                                <img
                                    src={
                                        this.state.complete ||
                                        this.isInitialRender
                                            ? item.coverImage
                                            : ProductsImages[i]
                                    }
                                    alt={item.title}
                                />
                                <div className="product__item__info">
                                    <h2 className="product_item__info-title">
                                        {item.title}
                                    </h2>
                                </div>
                                {!item.isInWishList && (
                                    <button
                                        className="product__item--wishList-add"
                                        onClick={() =>
                                            this.handleClickWishListAdd(item)
                                        }
                                    >
                                        장바구니 담기
                                    </button>
                                )}
                                {item.isInWishList && (
                                    <button
                                        className="product__item--wishList-remove"
                                        onClick={() =>
                                            this.handleClickWishListRemove(item)
                                        }
                                    >
                                        장바구니 빼기
                                    </button>
                                )}
                            </li>
                        )
                    }
                )}
            </ul>
        )
    }

    public render(): JSX.Element {
        return <>{this.renderProductItems()}</>
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onUpdateProducts: bindActionCreators(updateProducts, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Products)
