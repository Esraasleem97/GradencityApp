import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './../Screens/Home';
import unAuthorizedScreens from "./UnAuthorizedScreens";

const Tab = createBottomTabNavigator();


/**
 *
 * @returns {JSX.Element}
 * @constructor
 *  used / present  for authenticated user
 */
const AuthorizedScreens = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Home" component={Home}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default AuthorizedScreens