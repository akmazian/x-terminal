import {
    IonPage,
    IonHeader,
    IonItem,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonToggle,
} from '@ionic/react'

const Settings = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonToggle
                            checked={true}
                            onIonChange={e => {}}
                        >
                            Enable Notifications
                        </IonToggle>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Settings
