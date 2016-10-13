import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'

const enhancer = compose(
  applyMiddleware(
    reduxThunkMiddleware,
  )
)
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}
export default function configureStore(initialState) {
  const store = createStore(
    combineReducers([todos]),
    initialState,
    enhancer
  )
  return store
}
