import React from 'react';
import { Coupon } from './index';

class WishList extends React.Component {
    public render(): JSX.Element {
        return (
            <>
                <h1>WishList</h1>
                <Coupon />
            </>
        )
    }
}

export default WishList;