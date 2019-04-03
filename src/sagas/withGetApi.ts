import { put, take } from 'redux-saga/effects'
import * as Types from '../types/sagas/SagasTypes'

const fetchItemApi = async (url: string) => {
    const response = await fetch(url)
    return await response.json()
}

function* fetchItem(param: Types.IFetchItemList) {
    const itemJSON = yield fetchItemApi(param.url)
    try {
        yield put(param.requestItems())
        yield put(param.fetchItems(itemJSON))
    } catch (e) {
        yield put({ type: param.ERROR_ITEM, message: e.message })
    }
}

export function* fetchItemList(param: Types.IFetchItemList) {
    yield take(param.REQUEST_ITEM)
    yield fetchItem(param)
}
