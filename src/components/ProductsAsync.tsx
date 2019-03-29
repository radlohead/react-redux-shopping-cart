import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchProducts } from '../actions';
import { Products } from './index';
import * as Types from '../types/IProductsTypes';

interface IProductsAsyncProps {
    productsJSON: Types.IProductsJSON,
    onFetchProducts(): void;
}

class ProductsAsync extends React.PureComponent<IProductsAsyncProps> {
    constructor(props: IProductsAsyncProps) {
        super(props);
        const { productsJSON, onFetchProducts } = props;
        if(!productsJSON) onFetchProducts();
    }

    public render(): JSX.Element | null {
        const { productsJSON } = this.props;
        if(!productsJSON) return null;

        return (
            <>
                <Products productsJSON={productsJSON} />
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
        onFetchProducts: bindActionCreators(fetchProducts, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAsync);