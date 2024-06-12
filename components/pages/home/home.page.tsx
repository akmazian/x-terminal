import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from '@ionic/react'
import { notificationsCircle, notificationsOutline } from 'ionicons/icons'
import Card from './card.ui'

const Feed = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot="start">Home</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => {}}>
                            <IonIcon icon={notificationsOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <div className="h-full grid grid-cols-3 grid-rows-[repeat(4,8rem)]">
                    <Card icon={notificationsCircle} title="Announcement" />
                    <IonCard className="col-span-2 row-span-2">
                        <IonCardHeader>
                            <IonCardTitle>Announcements</IonCardTitle>
                            <IonCardSubtitle>news</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Everything that is going on at X
                        </IonCardContent>
                    </IonCard>
                    <Card icon={notificationsCircle} title="Announcement" />
                    <IonCard className="col-span-2">
                        <IonCardHeader>
                            <IonCardTitle>Announcements</IonCardTitle>
                            <IonCardSubtitle>news</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Everything that is going on at X
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Announcements</IonCardTitle>
                            <IonCardSubtitle>news</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Everything that is going on at X
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Announcements</IonCardTitle>
                            <IonCardSubtitle>news</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Everything that is going on at X
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Feed
