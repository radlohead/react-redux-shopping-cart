import React from 'react';
import { CouponAsync } from './index';

class WishList extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <>
                <h1>WishList</h1>
                <CouponAsync />
            </>
        )
    }
}

export default WishList;