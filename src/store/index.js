import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'messenger',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composrEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    persistedReducer,
    composrEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)