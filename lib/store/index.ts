import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './auth'
import { userReducer } from './user'

export const createStore = () => {
    return configureStore({
        reducer: {
            [authApi.reducerPath]: authApi.reducer,
            userStore: userReducer,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(authApi.middleware),
    })
}


export type ReduxStore = ReturnType<typeof createStore>
export type RootState = ReturnType<ReduxStore['getState']>
export type ReduxDispatch = ReduxStore['dispatch']
