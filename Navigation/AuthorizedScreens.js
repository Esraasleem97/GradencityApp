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
import {Octicons, AntDesign, SimpleLineIcons} from "@expo/vector-icons";
import {Animated, Dimensions, View} from "react-native";

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
                tabBarOptions={{
                    labelStyle: {fontSize: 12},
                    tabStyle: {flex: 1, justifyContent: 'center', marginBottom: 8},
                    // indicatorStyle: {
                    //     marginHorizontal: '5%',
                    //     width: '40%'
                    // },
                    activeTintColor: '#FF7E68',
                    // inactiveTintColor: '#000000',
                    style: {
                        height: 60,
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
                    // keyboardHidesTabBar: 'false',

                }}
                initialRouteName='Home'
            >
                <Tab.Screen name="Home" component={HomeScreensContainer}
                            options={{
                                tabBarIcon: ({focused}) => {
                                    return (<Octicons name='home' size={20} color={focused ? '#FF7E68' : '#999'}/>)
                                },
                                tabBarLabel: 'الرئيسية'
                            }} listeners={() => ({
                                tabPress: e => {
                                    Animated.spring(tabOffsetValue, {
                                        toValue: 0,
                                        useNativeDriver: true,
                                    }).start();
                                }
                            })}
                />
                <Tab.Screen name="Profile" component={Profile}
                            options={{
                                tabBarIcon: ({focused}) => {
                                    return (<AntDesign name='user' size={20} color={focused ? '#FF7E68' : '#999'}/>)
                                },
                                tabBarLabel: 'حسابي'
                            }}
                            listeners={() => ({
                                tabPress: e => {
                                    Animated.spring(tabOffsetValue, {
                                        toValue: getWidth() * 3,
                                        useNativeDriver: true,
                                    }).start();
                                }
                            })}
                />
                <Tab.Screen name="Logout" component={Profile}
                            options={{
                                tabBarIcon: ({focused}) => {
                                    return (
                                        <SimpleLineIcons name='logout' size={20} color={focused ? '#FF7E68' : '#999'}/>)
                                },
                                tabBarLabel: 'تسجيل الخروج'
                            }}
                            listeners={() => ({
                                tabPress: e => {
                                    Animated.spring(tabOffsetValue, {
                                        toValue: getWidth() * 4,
                                        useNativeDriver: true,
                                    }).start();
                                }
                            })}
                />

            </Tab.Navigator>

            <Animated.View style={{
                height: 3,
                position: "absolute",
                bottom: 0,
                left: 25,
                backgroundColor: '#FF7E68',
                borderRadius: 10,
                transform: [{translateX: tabOffsetValue}],
                width: getWidth() - 15,
            }}/>
        </NavigationContainer>
    );
}

function getWidth() {
    let width = Dimensions.get("window").width;
    // Horizontal padding = 20
    width = width - 30

    return width / 4
}

export default AuthorizedScreens