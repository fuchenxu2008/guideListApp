import { combineReducers } from 'redux'
import checklistReducer from './checklist'
import usageReducer from './usage'

export default combineReducers({
  checklistReducer,
  usageReducer,
})
