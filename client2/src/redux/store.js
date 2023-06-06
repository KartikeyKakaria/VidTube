import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import videoSlice from './videoSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import persistReducers from "redux-persist/es/persistReducer";

const persistConfig = {
    key:'root',
    version:1,
    storage,
}
const rootReducer = combineReducers({
    user:userSlice,
    video:videoSlice
})
const persistedReducer = persistReducers(persistConfig, rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    }
})

export const persistor = persistStore(store)