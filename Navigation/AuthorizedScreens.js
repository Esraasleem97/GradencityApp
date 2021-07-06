import React, {useRef} from 'react';
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
import Achievement from '../Screens/Achievement';
import {Animated, Dimensions, View,StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Rotate from "../Screens/Rotate";

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
            <Stack.Screen name='Achievement' component={Achievement}/>
            <Stack.Screen name='Rotate' component={Rotate}/>

        </Stack.Navigator>
    )
}



const tabBarOptions = ({
    labelStyle: {fontSize: 14},
    tabStyle: {flex: 1, justifyContent: 'center',marginBottom:8},
    indicatorStyle: {
        marginHorizontal: '5%',
        width: '40%'
    },
    activeTintColor: '#FF7E68',
    inactiveTintColor: '#999696',
    style: {
        height: 60,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: "absolute",
        bottom: 0,
    },
    keyboardHidesTabBar: 'false'
})

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
                            size = 20
                        } else if (route.name === 'Profile') {
                            iconName = 'person';
                            size = 20
                        } else if (route.name === 'Logout') {
                            iconName = 'exit';
                            size = 20
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    }})
                }
                tabBarOptions={tabBarOptions}
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

