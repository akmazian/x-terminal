import { useEffect, useState } from 'react'
import { useSignInMutation, useSignUpMutation } from '@/lib/store/auth'

const Auth = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [signUp, { isLoading: isSignUpLoading, error: signUpError }] =
        useSignUpMutation()
    const [
        signIn,
        {
            isLoading: isSignInLoading,
            error: signInError,
            isSuccess: isSignInSuccess,
            data: signInData,
        },
    ] = useSignInMutation()

    useEffect(() => {
        if (signUpError) throw signUpError
    }, [signUpError])

    useEffect(() => {
        if (signInError) throw signInError
    }, [signInError])

    return (
        <div className="flex flex-col">
            <input
                type="email"
                className="text-black"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="text-black"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button
                onClick={() => {
                    signUp({ email, password })
                }}
                className="bg-white rounded-full px-4 text-black"
            >
                Sign Up
            </button>
            <button
                onClick={() => {
                    signIn({ email, password })
                }}
                className="bg-white rounded-full px-4 text-black"
            >
                Sign In
            </button>
            {isSignUpLoading && <>Sign Up Loading</>}
            {isSignInLoading && <>Sign In Loading</>}
            {isSignInSuccess && (
                <p className="whitespace-pre">
                    Session: {JSON.stringify(signInData, null, 4)}
                    User: {JSON.stringify(signInData.user, null, 4)}
                </p>
            )}
        </div>
    )
}

export default Auth