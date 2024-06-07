'use client'

import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../../lib/store/auth'

const AuthPage = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [signUp, { isLoading, error }] = useSignUpMutation()

    useEffect(() => {
        if (error) throw error
    }, [error])
    return (
        <div>
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
            {isLoading && <>Sign Up Loading</>}
        </div>
    )
}

export default AuthPage
