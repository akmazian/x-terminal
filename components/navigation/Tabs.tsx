import { Redirect, Route } from 'react-router-dom'
import {
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
} from '@ionic/react'
import { cog, flash, list, lockClosed } from 'ionicons/icons'

import Home from '../pages/Feed'
import Lists from '../pages/Lists'
import ListDetail from '../pages/ListDetail'
import Settings from '../pages/Settings'
import AuthPage from '../pages/auth-page'

const Tabs = () => {
    return (
        <IonTabs className="max-w-[30rem]">
            <IonRouterOutlet>
                <Route path="/feed" render={() => <Home />} exact={true} />
                <Route path="/lists" render={() => <Lists />} exact={true} />
                <Route
                    path="/lists/:listId"
                    render={() => <ListDetail />}
                    exact={true}
                />
                <Route
                    path="/settings"
                    render={() => <Settings />}
                    exact={true}
                />
                <Route
                    path=""
                    render={() => <Redirect to="/feed" />}
                    exact={true}
                />
                <Route path="/auth" render={() => <AuthPage />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/feed">
                    <IonIcon icon={flash} />
                    <IonLabel>Feed</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/lists">
                    <IonIcon icon={list} />
                    <IonLabel>Lists</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/settings">
                    <IonIcon icon={cog} />
                    <IonLabel>Settings</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab4" href="/auth">
                    <IonIcon icon={lockClosed} />
                    <IonLabel>Auth</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default Tabs
