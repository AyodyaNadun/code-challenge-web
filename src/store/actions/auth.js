import { GET_ERROR, SET_USER_TOKEN } from './types'
import { authAxios } from '../api'


export const signin = (user) => async (dispatch) => {
    try {
        const { data } = await authAxios.post('auth/login', user);
        const { token } = data
        if (token) {
            localStorage.setItem('token', token)
            dispatch({
                type: SET_USER_TOKEN,
                payload: true
            })
            return true
        } else {
            return false
        }

    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: err
        })
        return false;
    }
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: SET_USER_TOKEN,
        payload: false
    })
    return true
};

export const getAuthStateFromToken = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        dispatch({
            type: SET_USER_TOKEN,
            payload: true
        })
        return true
    } else {
        return false
    }
};