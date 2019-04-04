import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { requestProducts } from '../actions';
import { Products } from './index';
import * as Types from '../types/components/ProductsTypes';

interface IProductsAsyncProps {
    productsJSON: Types.IProductsJSON;
    onRequestProducts(): void;
}

class ProductsAsync extends React.PureComponent<IProductsAsyncProps> {
    constructor(props: IProductsAsyncProps) {
        super(props);
        const { productsJSON, onRequestProducts } = props;
        if (!productsJSON) onRequestProducts();
    }

    public render(): JSX.Element | null {
        const { productsJSON } = this.props;
        if (!productsJSON) return null;

        return (
            <>
                <Products productsJSON={productsJSON} />
            </>
        );
    }
}

interface IMapStateToProps {
    products: IProductsAsyncProps;
}

const mapStateToProps = (state: IMapStateToProps) => {
    return {
        productsJSON: state.products.productsJSON
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onRequestProducts: bindActionCreators(requestProducts, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsAsync);
