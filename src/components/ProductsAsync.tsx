import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { requestProducts } from '../actions';
import { Products, Spinners } from './index';
import * as Types from '../types/components/ProductsTypes';

interface IProductsAsyncProps {
    productsJSON: Types.IProductsJSON;
    onRequestProducts(): void;
}

class ProductsAsync extends React.PureComponent<IProductsAsyncProps> {
    private loading = true;

    componentDidMount() {
        const { productsJSON, onRequestProducts } = this.props;
        if (Array.isArray(productsJSON) && !productsJSON.length) {
            onRequestProducts();
        }
    }

    public render(): JSX.Element {
        const { productsJSON } = this.props;
        const productsJSONCallCheck =
            Array.isArray(productsJSON) && productsJSON.length;

        if (productsJSONCallCheck) this.loading = false;

        return (
            <>
                <Spinners loading={this.loading} />
                {productsJSONCallCheck && (
                    <Products productsJSON={productsJSON} />
                )}
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
