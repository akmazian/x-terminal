import { TodoListItem } from '../../lib/mock'
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
} from '@ionic/react'

const ListEntry = ({ list }: { list: TodoListItem }) => {
    return (
        <IonItem routerLink={`/lists/${list.id}`} className="list-entry">
            <IonLabel>{list.name}</IonLabel>
        </IonItem>
    )
}

const Lists = () => {
    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonTitle>Lists</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Lists</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList></IonList>
            </IonContent>
        </IonPage>
    )
}

export default Lists
