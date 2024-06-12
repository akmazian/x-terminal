import { Capacitor } from '@capacitor/core'

const allTrue = {
    web: true,
    ios: true,
    android: true,
    electron: true,
}

const featureMap = {
    Haptics: {
        useHapticsImpact: allTrue,
        useHapticsVibrate: allTrue,
        useHapticsNotification: allTrue,
        useHapticsSelection: allTrue,
    },
}

export function isFeatureAvailable<
    T extends typeof featureMap,
    PluginKeys extends keyof NonNullable<T>,
    FeatureKeys extends keyof NonNullable<NonNullable<T>[PluginKeys]>,
>(plugin: PluginKeys, method: FeatureKeys): boolean {
    const isPluginAvailable = Capacitor.isPluginAvailable(plugin as string)
    const isFeatureSupported = (featureMap as any)[plugin][method][
        Capacitor.getPlatform()
    ]

    return isPluginAvailable && !!isFeatureSupported
}

export const availableFeatures = {
    useStorage: isFeatureAvailable('Haptics', 'useHapticsImpact'),
}
