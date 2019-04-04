export interface ICouponsJSON {
    map?: any;
    couponsJSON: {
        type: string;
        title: string;
        discountAmount?: number;
        discountRate?: number;
    };
}
