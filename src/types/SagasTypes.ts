export interface IFetchItemList {
    url: string,
    requestItems(): { type: string },
    fetchItems(json?: string): {
        type: string,
        json?: string
    },
    REQUEST_ITEM: string,
    ERROR_ITEM: string
}