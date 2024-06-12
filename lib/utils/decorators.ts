function notImplemented<T extends (...args: any[]) => any>(fn: T): T {
    return ((...args: Parameters<T>): ReturnType<T> => {
        throw new Error(`Function ${fn.name} is not implemented.`)
    }) as T
}

function deprecated<T extends (...args: any[]) => any>(
    message: string,
    fn: T
): T {
    return ((...args: Parameters<T>): ReturnType<T> => {
        console.warn(`Function ${fn.name} is deprecated. ${message}`)
        return fn(...args)
    }) as T
}

function permissionNotGranted<T extends (...args: any[]) => any>(
    system: 'ios' | 'android' | 'both',
    fn: T
): T {
    return ((...args: Parameters<T>): ReturnType<T> => {
        throw new Error(
            `Permissions required for Function ${fn.name} has not been implemented in ${system}.`
        )
    }) as T
}

export { notImplemented, deprecated, permissionNotGranted }
