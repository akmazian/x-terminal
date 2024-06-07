import {
    IonBackButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import { useParams } from 'react-router-dom'
import { ListItem, TodoListItem } from '../../lib/mock'

type ListDetailParams = {
    listId: string
}

const ListItems = ({ list }: { list: TodoListItem }) => {
    return (
        <IonList>
            {(list?.items || []).map((item, key) => (
                <ListItemEntry list={list} item={item} key={key} />
            ))}
        </IonList>
    )
}

const ListItemEntry = ({
    list,
    item,
}: {
    list: TodoListItem
    item: ListItem
}) => (
    <IonItem>
        <IonLabel>{item.name}</IonLabel>
        <IonCheckbox
            aria-label={item.name}
            checked={item.done || false}
            slot="end"
        />
    </IonItem>
)

const ListDetail = () => {
    const params = useParams<ListDetailParams>()

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/lists" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent></IonContent>
        </IonPage>
    )
}

export default ListDetail
