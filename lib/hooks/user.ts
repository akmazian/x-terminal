import { User } from '@supabase/supabase-js'
import { useReduxSelector } from './redux'

export const useNullableUser = () => {
    return useReduxSelector(state => state.userStore.user)
}

export const useUser = (): User => {
    const user = useNullableUser()

    if (!user) throw Error('User undefined')

    return user
}
