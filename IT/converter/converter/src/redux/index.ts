import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ratesSlice from "./reducers/rates/ratesSlice";

const rootReducer = combineReducers({
    rates: ratesSlice
})

export const store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;