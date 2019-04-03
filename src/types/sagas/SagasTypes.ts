export interface IFetchItemList {
    url: string
    requestItems(): { type: string }
    fetchItems(
        json?: any
    ): {
        type: string
        json?: any
    }
    REQUEST_ITEM: string
    ERROR_ITEM: string
}
