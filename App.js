import React, {useEffect, useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import AppLoading from "expo-app-loading";
import {Asset} from "expo-asset";
import {I18nManager, LayoutAnimation, UIManager} from 'react-native'
import {Provider} from "react-redux";
import {store} from "./Redux";
import NavigationHandler from "./Navigation/NavigationHandler";
import * as Updates from "expo-updates";
import NetInfo from "@react-native-community/netinfo";
import OfflineNotification from "./Components/offlineNotification";


if (!__DEV__) {
    console.log = () => {
    };
    console.info = () => {
    };
    console.warn = () => {
    };
    console.error = () => {
    };
    console.debug = () => {
    };
}

const images = [

    // start cache main system images

    require("./assets/adaptive-icon.png"),
    require("./assets/bg-plants6.jpg"),
    require("./assets/favicon.png"),
    require("./assets/icon.png"),
    require("./assets/ta3sheeb.png"),
    require("./assets/splash-s.png"),
    require("./assets/plant.png"),
    require("./assets/checkin.png"),
    require("./assets/seeding.png"),
    require("./assets/transform.png"),
    require("./assets/checkout.png"),
    require("./assets/ach.png"),
    require("./assets/taq.png"),
    require("./assets/rotate.png"),
    require("./assets/recipition.png"),

    // end of cache main system images

];


const App = () => {


    const [appIsReady, setAppIsReady] = useState(false)

    const [isConnected, setIsConnected] = useState(false)


    const handleResourcesAsync = async () => {
        // check for updates
        if (!__DEV__) {
            const checking = await Updates.checkForUpdateAsync()

            if (checking.isAvailable) {

                await Updates.fetchUpdateAsync()

                await Updates.reloadAsync()
            }
        }


        const cacheImages = images.map(image => {

            return Asset.fromModule(image).downloadAsync();
        });


        NetInfo.addEventListener(state => {

            console.log('Connection type ', state.type);

            console.log('Is connected ?', state.isConnected);

            return setIsConnected(state.isConnected)
        });

        return await Promise.all(cacheImages);
    }

    useEffect(() => {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(true)
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        LayoutAnimation.spring();
    })

    if (!appIsReady) {
        return (
            <AppLoading
                startAsync={handleResourcesAsync}
                onFinish={() => setAppIsReady(true)}
                onError={(e) => console.warn(e)}
            />
        )
    }
    return (
        <Provider store={store}>
            <ApplicationProvider {...eva} theme={eva.light}>
                {
                    isConnected && <OfflineNotification/>
                }
                <NavigationHandler/>
            </ApplicationProvider>
        </Provider>
    );


};
export default App