import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import contactsReducer from "../reducers/contacts"
import ContactReducer from "../reducers/contact"
import userReducer from "../reducers/user"

const configureStore=()=>{
    const store=createStore(combineReducers({
        contacts:contactsReducer,
        contact:ContactReducer,
        user:userReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore