import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon
} from '@ionic/react'

type CardProps = {
    icon: string
    title: string
}

const Card = ({ icon, title }: CardProps) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    <IonIcon icon={icon} />
                </IonCardTitle>
                <IonCardSubtitle>{title}</IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    )
}

export default Card
