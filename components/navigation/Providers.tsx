'use client'

import { PropsWithChildren, useRef } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore, ReduxStore } from '@/lib/store'
import ErrorBoundaryProvider from './boundary'

const Providers = ({ children }: PropsWithChildren) => {
    const storeRef = useRef<ReduxStore>()

    if (!storeRef.current) {
        storeRef.current = createStore()
    }

    return (
        <ReduxProvider store={storeRef.current}>
            <ErrorBoundaryProvider>{children}</ErrorBoundaryProvider>
        </ReduxProvider>
    )
}

export default Providers
