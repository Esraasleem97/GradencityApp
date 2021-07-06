import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {Provider} from "react-redux";
import {store} from './Redux'
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthorizedScreens from './Navigation/AuthorizedScreens'
import UnAuthorizedScreens from './Navigation/UnAuthorizedScreens'
import {Asset} from "expo-asset";

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
    require("./assets/adaptive-icon.png"),
    require("./assets/bg-plants3.jpg"),
    require("./assets/bg-plants5.jpg"),
    require("./assets/bg-plants6.jpg"),
    require("./assets/favicon.png"),
    require("./assets/gardenCitySplash.png"),
    require("./assets/icon.png"),
    require("./assets/plant-logo.png"),
    require("./assets/plants-logo.jpg"),
    require("./assets/plants.jpg"),
    require("./assets/plants1.png"),
    require("./assets/plants2.jpg"),
    require("./assets/plants3.png"),
    require("./assets/plants4.jpg"),
    require("./assets/plants5.jpg"),
    require("./assets/plants6.png"),
    require("./assets/plants7.png"),
    require("./assets/plants8.png"),
    require("./assets/splash.png")
];

const App = () => {

    const [appIsReady, setAppIsReady] = useState(false)

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleResourcesAsync = async () => {
        try {
            const cacheImages = images.map(image => {
                return Asset.fromModule(image).downloadAsync();
            });
            return Promise.all(cacheImages);
        } catch (e) {
            console.warn(e)
        }
    };

    const checkUserIsSet = async () => {

        let user = await AsyncStorage.getItem('user')

        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }

    const AppLoadingRequirements = async () => {
        await checkUserIsSet;
        await handleResourcesAsync;
    }


    if (!appIsReady) {
        return (
            <AppLoading
                startAsync={AppLoadingRequirements}
                onFinish={() => setAppIsReady(true)}
                onError={(e) => console.warn(e)}
            />
        )
    }


    return (
        <Provider store={store}>
            <ApplicationProvider {...eva} theme={eva.light}>
                {/*<UnAuthorizedScreens/>*/}
                <AuthorizedScreens/>
                {/*{isAuthenticated*/}
                {/*    ? <AuthorizedScreens/>*/}
                {/*    : <UnAuthorizedScreens/>*/}
                {/*}*/}
            </ApplicationProvider>
        </Provider>
    );


};
export default App