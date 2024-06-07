import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './auth'
import { userReducer } from './user'

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        userStore: userReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
