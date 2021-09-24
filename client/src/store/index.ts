import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import { workspaceReducer } from "./reducers/workspace"
import { userReducer } from "./reducers/user"

const rootReducer = combineReducers({
  workspaceReducer,
  userReducer
})

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch