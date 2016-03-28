import { combineReducers } from 'redux'
import popup from './popup'
import movies from './movies'
import i18n from './i18n'

export default combineReducers({
    popup,
    i18n,
    movies
});