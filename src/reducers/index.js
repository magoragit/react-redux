import { combineReducers } from 'redux'
import user from './user'
import popup from './popup'

export default combineReducers({
    user,
    popup
});