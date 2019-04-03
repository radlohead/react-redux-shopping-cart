import React, { ChangeEvent } from 'react';
import * as Types from '../types/components/CouponsTypes';

interface ICouponProps {
	couponsJSON: Types.ICouponsJSON;
}

class Coupon extends React.PureComponent<ICouponProps> {
	constructor(props: ICouponProps) {
		super(props);
	}

	private handleChangeCoupon(e: ChangeEvent<HTMLSelectElement>) {
		console.log(e.target.value);
	}

	public render(): JSX.Element {
		const { couponsJSON } = this.props;

		return (
			<>
				<select onChange={this.handleChangeCoupon.bind(this)}>
					{(couponsJSON as any).map((item: Types.ICouponsJSON['couponsJSON']) => {
						return (
							<option
								key={`${item.type}_${item.title}`}
								value={JSON.stringify(item)}
							>{item.title}</option>
						);
					})}
				</select>
			</>
		);
	}
}

export default Coupon;
