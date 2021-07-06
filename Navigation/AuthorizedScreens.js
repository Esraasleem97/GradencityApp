import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './../Screens/Home';
import {createStackNavigator} from "@react-navigation/stack";
import Weed from "../Screens/Weed";
import Profile from "../Screens/Profile";
import Seed from "../Screens/Seed";
import Taeqil from "../Screens/Taeqil";
import TrimMove from "../Screens/TrimMove";


import {Animated, Dimensions, View,StyleSheet} from "react-native";

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
        </Stack.Navigator>
    )
}

/**
 * @returns {JSX.Element}
 * @constructor
 *  used / present  for authenticated user
 */


const AuthorizedScreens = () => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <NavigationContainer>
            <Tab.Navigator


                screenOptions={({ route }) => ({
                    tabBarIcon: ({  color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home'
                            size=20
                        } else if (route.name === 'Profile') {
                            iconName = 'person';
                            size=20
                        }else if (route.name === 'Logout') {
                            iconName = 'exit';
                            size=20
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}

                tabBarOptions={{
                    labelStyle: {fontSize: 12},
                    tabStyle: {flex: 1, justifyContent: 'center', marginBottom: 8 },
                    indicatorStyle: {
                        marginHorizontal: '5%',
                        width: '40%'
                    },
                    activeTintColor: '#FF7E68',
                    inactiveTintColor: '#424242',
                    // activeTintColor: '#107122',
                    // inactiveTintColor: '#424242',
                    style: styles.tabContainer,
                    keyboardHidesTabBar: 'false'

                }}

                initialRouteName='Home'
            >


                <Tab.Screen name="Home" component={HomeScreensContainer}
                options={{
                    tabBarLabel:'الرئيسية',
                }}
                />
                <Tab.Screen name="Profile" component={Profile}
                            options={{
                                tabBarLabel:'حسابي'
                            }}
                />
                <Tab.Screen name="Logout" component={Profile}
                            options={{
                                tabBarLabel:'تسجيل الخروج'
                            }}
                />

            </Tab.Navigator>


        </NavigationContainer>
    );
}


export default AuthorizedScreens

const styles = StyleSheet.create({
    tabContainer: {
        height: 55,
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.0,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 10,
        position: "absolute",
        bottom: 0,

    },
    slider: {
        height: 5,
        position: "absolute",
        top: 0,
        left: 10,
        backgroundColor: '#FF7E68',
        borderRadius: 10,
        width: 50
    },
});