import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics'
import { useCallback } from 'react'

export const useHapticsImpact = () => {
    const impactHeavy = useCallback(async () => {
        await Haptics.impact({ style: ImpactStyle.Heavy })
    }, [])

    const impactMedium = useCallback(async () => {
        await Haptics.impact({ style: ImpactStyle.Medium })
    }, [])

    const impactLight = useCallback(async () => {
        await Haptics.impact({ style: ImpactStyle.Light })
    }, [])

    return { impactLight, impactMedium, impactHeavy }
}

export const useHapticsVibrate = (duration?: number) => {
    return useCallback(async () => {
        await Haptics.vibrate(duration ? { duration: duration } : undefined)
    }, [duration])
}

export const useHapticsNotification = (type: NotificationType) => {
    return useCallback(async () => {
        await Haptics.notification({ type })
    }, [type])
}

export const useHapticsSelection = () => {
    const selectionStart = useCallback(async () => {
        await Haptics.selectionStart()
    }, [])

    const selectionChanged = useCallback(async () => {
        await Haptics.selectionChanged()
    }, [])

    const selectionEnd = useCallback(async () => {
        await Haptics.selectionEnd()
    }, [])

    return { selectionStart, selectionChanged, selectionEnd }
}