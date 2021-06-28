import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import Login from "./Screens/Login";
import {Provider} from "react-redux";
import {store} from './Redux'
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";


const App = () => {

    const [appIsReady, setAppIsReady] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkUserIsSet = async () => {
        let user = await AsyncStorage.getItem('user')

        if (user) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }

    }

    if (!appIsReady) {
        return (
            <AppLoading
                startAsync={checkUserIsSet}
                onFinish={() => setAppIsReady(true)}
                onError={(e) => console.warn(e)}
            />
        )
    }


    return (
        <Provider store={store}>
            <ApplicationProvider {...eva} theme={eva.light}>
                {isAuthenticated
                    ? <Login/>
                    : <Login/>
                }
            </ApplicationProvider>
        </Provider>
    );


};
export default App