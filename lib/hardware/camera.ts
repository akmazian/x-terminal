import { Camera, CameraResultType } from '@capacitor/camera'
import { QueryStatus } from '@reduxjs/toolkit/query'
import { useEffect, useMemo, useState, useCallback } from 'react'
import { XTError } from '@/components/boundary'
import { permissionNotGranted } from '../utils/decorators'

export const useCamera = permissionNotGranted('ios', () => {
    const [imageSrc, setImageSrc] = useState<string>('')
    const [status, setStatus] = useState<QueryStatus>(QueryStatus.pending)
    const [errorMessage, setErrorMessage] = useState('')

    const takePhoto = useCallback(async () => {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri,
            })

            if (image.webPath) {
                setImageSrc(image.webPath)
                setStatus(QueryStatus.fulfilled)
            } else {
                setStatus(QueryStatus.rejected)
            }
        } catch (error) {
            setStatus(QueryStatus.rejected)
            setErrorMessage(JSON.stringify(error, null, 4))
        }
    }, [])

    useEffect(() => {
        takePhoto()
    }, [takePhoto])

    const error: XTError | undefined = useMemo(() => {
        if (status === QueryStatus.rejected) {
            return {
                status: 'Camera access failed',
                data: errorMessage,
            }
        }
        return undefined
    }, [errorMessage, status])

    return {
        imageSrc,
        status,
        isLoading: status === QueryStatus.pending,
        isSuccess: status === QueryStatus.fulfilled,
        error,
    }
})
