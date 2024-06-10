import { User } from '@supabase/supabase-js'
import { useReduxDispatch, useReduxSelector } from './redux'
import { useEffect } from 'react'

export const useNullableUser = () => {
    const { user } = useReduxSelector(state => state.userStore)

    return user
}

export const useUser = (): User => {
    const user = useNullableUser()

    if (!user) throw Error('User undefined')

    return user
}
