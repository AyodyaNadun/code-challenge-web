import { SET_CURRENT_USER, SET_USER_TOKEN } from '../actions/types'

const initialState = {
    isAuth: false,
    user: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_USER_TOKEN:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}