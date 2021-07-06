import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './../Screens/Home';
import {createStackNavigator} from "@react-navigation/stack";
import Weed from "../Screens/Weed";
import Profile from "../Screens/Profile";
import Seed from "../Screens/Seed";
import Taeqil from "../Screens/Taeqil";
import TransferBetweenPlants from "../Screens/TransferBetweenPlants";
import TrimMove from "../Screens/TrimMove";

import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


const HomeScreensContainer = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Weed' component={Weed}/>
            <Stack.Screen name='Seed' component={Seed}/>
            <Stack.Screen name='Taeqil' component={Taeqil}/>
            <Stack.Screen name='TrimMove' component={TrimMove}/>
            <Stack.Screen name='Transfer' component={TransferBetweenPlants}/>

        </Stack.Navigator>
    )
}



const tabBarOptions = ({
    labelStyle: {fontSize: 14},
    tabStyle: {flex: 1, justifyContent: 'center'},
    indicatorStyle: {
        marginHorizontal: '5%',
        width: '40%'
    },
    activeTintColor: '#107122',
    inactiveTintColor: '#424242',
    style: {backgroundColor: '#ffffff', paddingBottom: 4},
    keyboardHidesTabBar: 'false'
})

/**
 * @returns {JSX.Element}
 * @constructor
 *  used / present  for authenticated user
 */
const AuthorizedScreens = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={
                    ({route}) => ({
                        tabBarIcon: ({color, size}) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = 'home'
                            } else if (route.name === 'Profile') {
                                iconName = 'person';
                            } else if (route.name === 'Logout') {
                                iconName = 'exit';
                            }
                            return <Ionicons name={iconName} size={size} color={color}/>;
                        }
                    })
                }

                tabBarOptions={tabBarOptions}
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