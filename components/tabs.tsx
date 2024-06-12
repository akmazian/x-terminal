import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react'
import { appsOutline, cog, list } from 'ionicons/icons'
import { Redirect, Route } from 'react-router-dom'

import Home from './pages/home/home.page'

const Tabs = () => {
    return (
        <IonTabs className="h-[9.495in] w-[4.575in]">
            <IonRouterOutlet className="overflow-scroll">
                <Route path="" render={() => <Home />} exact={true} />
                <Route
                    path="/home"
                    render={() => <Redirect to="/" />}
                    exact={true}
                />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/home">
                    <IonIcon icon={appsOutline} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/home">
                    <IonIcon icon={list} />
                    <IonLabel>Lists</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/home">
                    <IonIcon icon={cog} />
                    <IonLabel>Settings</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default Tabs
