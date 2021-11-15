import { GET_ERROR, SEARCH_DATA, TABLE_FIELD, PAGE_COUNT } from './types'
import { axios } from '../api'

export const search = (tableName, searchData) => dispatch => {
    axios.post(`/${tableName}/search`, searchData).then(res => {
        dispatch({
            type: SEARCH_DATA,
            payload: res.data.data.results
        })
        dispatch({
            type: PAGE_COUNT,
            payload: res.data.data.pages
        })
    }
    ).catch(err => {
        dispatch({
            type: PAGE_COUNT,
            payload: 0
        })
        dispatch({
            type: SEARCH_DATA,
            payload: []
        })
        dispatch({
            type: GET_ERROR,
            payload: err
        })
    })
    return true
}

export const getTableField = (tableName) => dispatch => {
    axios.get(`/${tableName}/search/field`).then(res => {
        dispatch({
            type: TABLE_FIELD,
            payload: res.data.data
        })
    }
    ).catch(err => {
        dispatch({
            type: GET_ERROR,
            payload: err
        })
    })
    return true
}