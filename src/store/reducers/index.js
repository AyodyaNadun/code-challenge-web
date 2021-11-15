import { combineReducers } from 'redux'
import authReducer from '../reducers/authReducers'
import searchReducers from '../reducers/searchReducers'

export default combineReducers({
    auth: authReducer,
    search: searchReducers
})