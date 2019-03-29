import React from 'react';
import * as Types from '../types/IProductsTypes';
import '../css/components/Products.scss';

interface IProductsProps {
    productsJSON: Types.IProductsJSON
}

class Products extends React.PureComponent<IProductsProps> {
    constructor(props: IProductsProps) {
        super(props);
    }

    public renderProductItems(): JSX.Element {
        const { productsJSON } = this.props;

        return (
            <ul className="product">
                {(productsJSON as any).map((item: Types.IProductsJSON['productsJSON']) => {
                    return (
                        <li key={`${item.id}_${item.score}`} className="product__item">
                            <img src={item.coverImage} alt={item.title} />
                            <div className="product__item__info">
                                <h2 className="product_item__info-title">{item.title}</h2>
                            </div>
                            <button className="product__item--wishList-add"></button>
                            <button className="product__item--wishList-remove"></button>
                        </li>
                    )
                })}
            </ul>
        )
    }

    public render(): JSX.Element {
        return (
            <>
                {this.renderProductItems()}
            </>
        )
    }
}

export default Products;