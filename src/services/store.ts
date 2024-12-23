import { combineReducers, configureStore } from '@reduxjs/toolkit';
import menuItemsReducer from './slices/menuItemSlice';
import faqsReducer from './slices/faqSlice';
import userReducer from './slices/userSlice';
import cardReducer from './slices/cardSlice';

import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from 'react-redux';

export const rootReducer = combineReducers({
    faqsReducer: faqsReducer,
    menuItemsReducer: menuItemsReducer,
    userReducer: userReducer,
    cardReducer: cardReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;