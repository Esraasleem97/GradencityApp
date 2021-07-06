import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './../Screens/Home';
import {createStackNavigator} from "@react-navigation/stack";
import Weed from "../Screens/Weed";
import Profile from "../Screens/Profile";
import Seed from "../Screens/Seed";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeScreensContainer = () => {
    return (

        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Weed' component={Weed}/>
            <Stack.Screen name='Seed' component={Seed}/>
        </Stack.Navigator>
    )
}

/**
 * @returns {JSX.Element}
 * @constructor
 *  used / present  for authenticated user
 */
const AuthorizedScreens = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: {fontSize: 14},
                    tabStyle: {flex: 1, justifyContent: 'center'},
                    indicatorStyle: {
                        marginHorizontal: '5%',
                        width: '40%'
                    },
                    activeTintColor: '#094414',
                    inactiveTintColor: '#000000',
                    style: {backgroundColor: 'white'},
                    keyboardHidesTabBar:'false'
                }}
                initialRouteName='Home'
            >
                <Tab.Screen name="Home" component={HomeScreensContainer}/>
                <Tab.Screen name="Profile" component={Profile}/>
                <Tab.Screen name="Logout" component={Profile}/>

            </Tab.Navigator>


        </NavigationContainer>
    );
}


export default AuthorizedScreens