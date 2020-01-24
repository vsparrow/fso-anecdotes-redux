import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
	anecdotes: anecdoteReducer, 
	notifcation: notificationReducer,
	filter: filterReducer
})
const store = createStore(reducer)

export default store