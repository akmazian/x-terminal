import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '../supabase'

type AuthCredentials = {
    email: string
    password: string
}

type SignUpCredentials = AuthCredentials

type SignInCredentials = AuthCredentials

type SignOutResult = {
    message: string
}

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fakeBaseQuery(),
    endpoints: builder => ({
        signUp: builder.mutation<User, SignUpCredentials>({
            async queryFn({ email, password }) {
                try {
                    const {
                        data: { user, session },
                        error,
                    } = await supabase.auth.signUp({
                        email,
                        password,
                    })

                    if (error || !user) {
                        throw error
                    }
                    return { data: user }
                } catch (error: any) {
                    return {
                        error: { status: 'Sign up error', data: error.message },
                    }
                }
            },
        }),
        signIn: builder.mutation<Session, SignInCredentials>({
            async queryFn({ email, password }) {
                try {
                    const {
                        data: { session },
                        error,
                    } = await supabase.auth.signInWithPassword({
                        email,
                        password,
                    })
                    if (error || !session) {
                        throw error
                    }

                    return { data: session }
                } catch (error: any) {
                    return {
                        error: {
                            status: 'Sign in failed',
                            data: error.message,
                        },
                    }
                }
            },
        }),
        signOut: builder.mutation<SignOutResult, void>({
            async queryFn() {
                try {
                    const { error } = await supabase.auth.signOut()
                    if (error) throw error
                    return { data: { message: 'Signed out successfully' } }
                } catch (error: any) {
                    return {
                        error: {
                            status: 'Sign out failed',
                            data: error.message,
                        },
                    }
                }
            },
        }),
        fetchUser: builder.query<User | null, void>({
            async queryFn() {
                try {
                    const { data, error } = await supabase.auth.getUser()
                    if (error) throw error
                    return { data: data.user }
                } catch (error: any) {
                    return {
                        error: {
                            status: 'Get user failed',
                            data: error.message,
                        },
                    }
                }
            },
        }),
    }),
})

export const {
    useSignUpMutation,
    useSignInMutation,
    useSignOutMutation,
    useFetchUserQuery,
} = authApi
