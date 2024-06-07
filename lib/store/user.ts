// src/features/user/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@supabase/supabase-js'
import { authApi } from './auth'

interface UserState {
    user: User | null
}

const initialState: UserState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
        },
        clearUser: state => {
            state.user = null
        },
    },
    extraReducers: builder => {
        builder.addMatcher(
            authApi.endpoints.signIn.matchFulfilled,
            (state, action: PayloadAction<{ user: User }>) => {
                state.user = action.payload.user
            },
        )
        builder.addMatcher(authApi.endpoints.signOut.matchFulfilled, state => {
            state.user = null
        })
    },
})

export const { setUser, clearUser } = userSlice.actions
export const userReducer = userSlice.reducer
