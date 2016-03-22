import { combineReducers } from 'redux'
import content from './content'
import user from './user'

export default combineReducers({
    content,
    user
});