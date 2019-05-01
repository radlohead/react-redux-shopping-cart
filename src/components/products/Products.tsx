import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { updateProducts, updateTotalPrice } from '@src/actions'
import * as Types from '../../types/components/ProductsTypes'
import ProductsImages from './ProductsImages'
import '@src/css/components/Products.scss'

interface IProductsProps {
    productsJSON: Types.IProductsJSON
    onUpdateProducts(productsJSON: Types.IProductsJSON): Types.IUpdateProducts
    onUpdateTotalPrice(totalPrice: number): void
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

        this.totalPrice()
    }

    private totalPrice(): void {
        const { productsJSON, onUpdateTotalPrice } = this.props
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
        onUpdateTotalPrice(totalPrice)
    }

    private handleClickWishListAdd(item: Types.IProductsJSON['productsJSON']) {
        const { productsJSON, onUpdateProducts } = this.props
        item.isInWishList = !item.isInWishList
        onUpdateProducts(productsJSON)
        this.totalPrice()
    }

    private handleClickWishListRemove(
        item: Types.IProductsJSON['productsJSON']
    ) {
        const { productsJSON, onUpdateProducts } = this.props
        item.count = 1
        item.isChecked = false
        item.isInWishList = false
        onUpdateProducts(productsJSON)
        this.totalPrice()
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
                                    <span className="product__item__info-price">
                                        {item.price}
                                    </span>
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

interface IMapStateToProps {
    wishList: {
        totalPrice: number
    }
}

const mapStateToProps = (state: IMapStateToProps) => {
    return {
        totalPrice: state.wishList.totalPrice
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onUpdateProducts: bindActionCreators(updateProducts, dispatch),
        onUpdateTotalPrice: bindActionCreators(updateTotalPrice, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
