import { SEARCH_DATA, TABLE_FIELD, PAGE_COUNT } from '../actions/types'

const initialState = {
    searchData: [],
    tableField: [],
    pageCount: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_DATA:
            return {
                ...state,
                searchData: action.payload
            }
        case TABLE_FIELD:
            return {
                ...state,
                tableField: action.payload
            }
        case PAGE_COUNT:
            return {
                ...state,
                pageCount: action.payload
            }
        default:
            return state
    }
}