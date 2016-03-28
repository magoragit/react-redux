import { combineReducers } from 'redux'
import user from './user'
import popup from './popup'
import i18n from './i18n'

export default combineReducers({
    user,
    popup,
    i18n
});