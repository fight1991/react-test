import { combineReducers } from 'redux'
import counter from './count'
import user from './user'
const rootReducers = combineReducers({
  counter,
  user
})
export default rootReducers