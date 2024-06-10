import React, { useState, useEffect, FC, PropsWithChildren } from 'react'

interface ErrorInfo {
    message: string
    stack?: string
}

const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
    const [errorInfo, setErrorInfo] = useState<ErrorInfo>()

    useEffect(() => {
        const errorHandler = (event: ErrorEvent) => {
            console.error('Caught error:', event.error || event.message)

            setErrorInfo({
                message: event.error?.status || event.message,
                stack: event.error?.data || 'No stack trace available',
            })
        }

        const rejectionHandler = (event: PromiseRejectionEvent) => {
            console.error('Unhandled promise rejection:', event.reason)

            setErrorInfo({
                message: event.reason?.status || 'Unhandled promise rejection',
                stack: event.reason?.data || 'No stack trace available',
            })
        }

        window.addEventListener('error', errorHandler)
        window.addEventListener('unhandledrejection', rejectionHandler)

        return () => {
            window.removeEventListener('error', errorHandler)
            window.removeEventListener('unhandledrejection', rejectionHandler)
        }
    }, [])

    if (errorInfo) {
        return (
            <div>
                <h1>Something went wrong.</h1>
                <p>{errorInfo.message}</p>
                <pre>{errorInfo.stack}</pre>
                <button onClick={() => window.location.reload()}>
                    Try Again
                </button>
            </div>
        )
    }

    return <>{children}</>
}

export default ErrorBoundary
