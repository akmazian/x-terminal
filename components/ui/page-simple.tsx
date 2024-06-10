import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import { PropsWithChildren } from 'react'

const PageSimple = ({
    children,
    title,
}: PropsWithChildren<{ title: string }>) => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>{children}</IonContent>
    </IonPage>
)

export default PageSimple
