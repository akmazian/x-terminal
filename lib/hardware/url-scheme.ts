import { App } from '@capacitor/app'
import { useEffect, useState } from 'react'

App.addListener('appStateChange', ({ isActive }) => {
    console.log('App state changed. Is active?', isActive)
})

App.addListener('appUrlOpen', data => {
    console.log('App opened with URL:', data)
})

App.addListener('appRestoredResult', data => {
    console.log('Restored state:', data)
})

interface UrlScheme {
    url?: string
    error?: {
        status: string
        data: string
    }
    isLoading: boolean
    isSuccess: boolean
}

export const useAsyncUrlScheme = async () => {
    const launchUrl = await App.getLaunchUrl()

    if (launchUrl) {
        const { url } = launchUrl
        return { url }
    } else {
        throw {
            status: 'No url scheme is being passed in',
            data: 'LaunchUrl is null',
        }
    }
}

export const useUrlScheme = (): UrlScheme => {
    const [urlScheme, setUrlScheme] = useState<UrlScheme>({
        isLoading: true,
        isSuccess: false,
    })

    useEffect(() => {
        const fetchLaunchUrl = async () => {
            try {
                const launchUrl = await App.getLaunchUrl()

                if (launchUrl) {
                    setUrlScheme({
                        url: launchUrl.url,
                        isLoading: false,
                        isSuccess: true,
                    })
                } else {
                    setUrlScheme({
                        error: {
                            status: 'No url scheme is being passed in',
                            data: 'LaunchUrl is null',
                        },
                        isLoading: false,
                        isSuccess: false,
                    })
                }
            } catch (error: any) {
                setUrlScheme({
                    error: {
                        status: 'Error fetching launch url',
                        data: error.message || 'Unknown error',
                    },
                    isLoading: false,
                    isSuccess: false,
                })
            }
        }

        fetchLaunchUrl()
    }, [])

    return urlScheme
}
