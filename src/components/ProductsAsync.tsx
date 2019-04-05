import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { requestProducts } from '../actions';
import { Products } from './index';
import * as Types from '../types/components/ProductsTypes';
import { ClipLoader } from 'react-spinners';

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

    private loading = true;

    public render(): JSX.Element {
        const { productsJSON } = this.props;
        if (productsJSON) this.loading = false;

        return (
            <>
                <ClipLoader
                    sizeUnit={'px'}
                    size={30}
                    color={'#123abc'}
                    loading={this.loading}
                />
                {productsJSON && <Products productsJSON={productsJSON} />}
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
