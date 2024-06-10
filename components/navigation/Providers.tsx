'use client'

import { PropsWithChildren } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../../lib/store'
import ErrorBoundaryProvider from './boundary'

const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ReduxProvider store={store}>
            <ErrorBoundaryProvider>{children}</ErrorBoundaryProvider>
        </ReduxProvider>
    )
}

export default Providers
