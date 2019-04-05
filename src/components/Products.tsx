import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { updateProducts } from '../actions';
import * as Types from '../types/components/ProductsTypes';
import '../css/components/Products.scss';
import productsImg from '../images/components/Products/products-img_01.png';

interface IProductsProps {
    productsJSON: Types.IProductsJSON;
    onUpdateProducts(productsJSON: Types.IProductsJSON): Types.IUpdateProducts;
}

class Products extends React.PureComponent<IProductsProps, any> {
    constructor(props: IProductsProps) {
        super(props);
        this.state = {
            complete: false
        };
    }

    componentDidMount() {
        document.addEventListener('readystatechange', (e: any) => {
            if (e.target.readyState === 'complete') {
                this.setState({
                    complete: true
                });
            }
            console.log('DOMContentLoaded', e.target.readyState);
        });
    }

    private handleClickWishListAdd(item: Types.IProductsJSON['productsJSON']) {
        const { productsJSON, onUpdateProducts } = this.props;
        item.isInWishList = !item.isInWishList;
        onUpdateProducts(productsJSON);
    }

    private handleClickWishListRemove(
        item: Types.IProductsJSON['productsJSON']
    ) {
        const { productsJSON, onUpdateProducts } = this.props;
        item.isInWishList = !item.isInWishList;
        onUpdateProducts(productsJSON);
    }

    public renderProductItems(): JSX.Element {
        const { productsJSON } = this.props;
        console.log('render: ');

        return (
            <ul className="product">
                {productsJSON.map(
                    (item: Types.IProductsJSON['productsJSON']) => {
                        return (
                            <li
                                key={`${item.id}_${item.score}`}
                                className="product__item"
                            >
                                <img
                                    src={
                                        this.state.complete
                                            ? item.coverImage
                                            : productsImg
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
                        );
                    }
                )}
            </ul>
        );
    }

    public render(): JSX.Element {
        return <>{this.renderProductItems()}</>;
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onUpdateProducts: bindActionCreators(updateProducts, dispatch)
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Products);
