import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@supabase/supabase-js'
import { authApi } from './auth'

interface UserState {
    user: User | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: UserState = {
    user: null,
    status: 'idle',
    error: null,
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
        builder
            .addMatcher(authApi.endpoints.signUp.matchPending, state => {
                state.status = 'loading'
            })
            .addMatcher(
                authApi.endpoints.signUp.matchFulfilled,
                (state, action: PayloadAction<User>) => {
                    state.status = 'succeeded'
                    state.user = action.payload
                },
            )
            .addMatcher(
                authApi.endpoints.signUp.matchRejected,
                (state, action) => {
                    state.status = 'failed'
                    state.error = action.error.message || 'Sign up failed'
                },
            )
            .addMatcher(authApi.endpoints.signIn.matchPending, state => {
                state.status = 'loading'
            })
            .addMatcher(
                authApi.endpoints.signIn.matchFulfilled,
                (state, action: PayloadAction<{ user: User }>) => {
                    state.status = 'succeeded'
                    state.user = action.payload.user
                },
            )
            .addMatcher(
                authApi.endpoints.signIn.matchRejected,
                (state, action) => {
                    state.status = 'failed'
                    state.error = action.error.message || 'Sign in failed'
                },
            )
            .addMatcher(authApi.endpoints.signOut.matchPending, state => {
                state.status = 'loading'
            })
            .addMatcher(authApi.endpoints.signOut.matchFulfilled, state => {
                state.status = 'succeeded'
                state.user = null
            })
            .addMatcher(
                authApi.endpoints.signOut.matchRejected,
                (state, action) => {
                    state.status = 'failed'
                    state.error = action.error.message || 'Sign out failed'
                },
            )
            .addMatcher(authApi.endpoints.fetchUser.matchPending, state => {
                state.status = 'loading'
            })
            .addMatcher(
                authApi.endpoints.fetchUser.matchFulfilled,
                (state, action: PayloadAction<User | null>) => {
                    state.status = 'succeeded'
                    state.user = action.payload
                },
            )
            .addMatcher(
                authApi.endpoints.fetchUser.matchRejected,
                (state, action) => {
                    state.status = 'failed'
                    state.error = action.error.message || 'Failed to fetch user'
                },
            )
    },
})

export const { setUser, clearUser } = userSlice.actions
export const userReducer = userSlice.reducer
